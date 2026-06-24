require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

// ── Database ──────────────────────────────────────────
connectDB();

// ── Core middleware ───────────────────────────────────
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// CORS - restrict to the configured frontend origin(s)
const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (curl, Postman, server-to-server)
      if (!origin) return callback(null, true);
      // If no CLIENT_URL is configured, allow all (fallback for local dev)
      if (allowedOrigins.length === 0) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

// Explicitly handle OPTIONS preflight for all routes
app.options("*", cors());

// ── Routes ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to the Goklyn Backend API" });
});
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Goklyn backend is running" });
});

app.use("/api/contact", contactRoutes);

// ── Error handling (must be last) ──────────────────────
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});