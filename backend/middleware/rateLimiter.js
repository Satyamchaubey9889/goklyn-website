const rateLimit = require("express-rate-limit");

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions from this device. Please try again later.",
  },
});

module.exports = { contactFormLimiter };
