const express = require("express");
const { validateContact, createContact } = require("../controllers/contactController");
const { contactFormLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/", contactFormLimiter, validateContact, createContact);

module.exports = router;
