require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

// ── Core middleware ────────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// ── CORS (backup — Vercel sets these at CDN level via vercel.json) ─────────
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowed = (process.env.CLIENT_URL || "")
    .split(",").map((o) => o.trim()).filter(Boolean);

  if (!origin || allowed.length === 0 || allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// ── DB connection middleware (lazy — runs per request, cached after first) ──
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB middleware error:", err.message);
    return res.status(503).json({
      success: false,
      message: "Database unavailable. Please try again shortly.",
      debug: process.env.NODE_ENV !== "production" ? err.message : undefined,
    });
  }
});

// ── Health check (also shows which env vars are missing) ───────────────────
app.get("/api/health", (req, res) => {
  const missing = ["MONGODB_URI", "SMTP_HOST", "SMTP_USER", "SMTP_PASS", "ADMIN_EMAIL"]
    .filter((k) => !process.env[k]);
  res.json({
    success: true,
    message: "Goklyn backend is running",
    db: require("mongoose").connection.readyState === 1 ? "connected" : "disconnected",
    missingEnvVars: missing.length ? missing : "none",
  });
});

app.use("/api/contact", contactRoutes);

// ── Error handling ──────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});