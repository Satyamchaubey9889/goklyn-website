const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const { sendAdminNotification, sendUserAcknowledgement } = require("../utils/sendEmail");

const validateContact = [
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name is too long"),
  body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Enter a valid email address").normalizeEmail(),
  body("phone")
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[0-9+\-\s()]{7,20}$/)
    .withMessage("Enter a valid phone number"),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 5000 }).withMessage("Message is too long"),
];

async function createContact(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Please fix the errors below.",
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { fullname, email, phone, message } = req.body;


    const contact = await Contact.create({ fullname, email, phone, message });

    try {
      await sendAdminNotification(contact);
      contact.notifiedAdmin = true;
      await contact.save();
    } catch (mailErr) {
      console.error("Failed to send admin notification email:", mailErr.message);
    }

    try {
      await sendUserAcknowledgement(contact);
    } catch (mailErr) {
      console.error("Failed to send user acknowledgement email:", mailErr.message);
    }

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you shortly.",
      data: { id: contact._id },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { validateContact, createContact };
