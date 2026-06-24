const rateLimit = require("express-rate-limit");

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  // Read real IP from Vercel's forwarded header
  keyGenerator: (req) => {
    return (
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      req.socket?.remoteAddress ||
      "unknown"
    );
  },
  message: {
    success: false,
    message: "Too many submissions from this device. Please try again later.",
  },
});

module.exports = { contactFormLimiter };