require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

// ── Database ───────────────────────────────────────────
connectDB();

// ── Core middleware ────────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// ── CORS headers (backup — Vercel sets these at CDN level via vercel.json) ──
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowed = (process.env.CLIENT_URL || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  if (!origin || allowed.length === 0 || allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// ── Routes ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to the Goklyn Backend API" });
});
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Goklyn backend is running" });
});

app.use("/api/contact", contactRoutes);

// ── Error handling ──────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});