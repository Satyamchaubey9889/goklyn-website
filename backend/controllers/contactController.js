const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const { sendAdminNotification, sendUserAcknowledgement } = require("../utils/sendEmail");

const validateContact = [
  body("fullname").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }).withMessage("Name is too long"),
  body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Enter a valid email address").normalizeEmail(),
  body("phone").optional({ checkFalsy: true }).trim().matches(/^[0-9+\-\s()]{7,20}$/).withMessage("Enter a valid phone number"),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 5000 }).withMessage("Message is too long"),
];

async function createContact(req, res, next) {
  try {
    // ── 1. Validate input ───────────────────────────────
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Please fix the errors below.",
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { fullname, email, phone, message } = req.body;
    console.log(`[contact] new submission from ${email}`);

    // ── 2. Save to MongoDB ──────────────────────────────
    let contact;
    try {
      contact = await Contact.create({ fullname, email, phone, message });
      console.log(`[contact] saved to DB: ${contact._id}`);
    } catch (dbErr) {
      console.error("[contact] DB save failed:", dbErr.message);
      throw dbErr; // bubble up to outer catch → 500
    }

    // ── 3. Admin notification email (non-fatal) ─────────
    try {
      await sendAdminNotification(contact);
      contact.notifiedAdmin = true;
      await contact.save();
      console.log(`[contact] admin notified`);
    } catch (mailErr) {
      // Email failure must NOT fail the request — data is already saved.
      console.error("[contact] admin email failed:", mailErr.message);
    }

    // ── 4. User acknowledgement email (non-fatal) ───────
    try {
      await sendUserAcknowledgement(contact);
      console.log(`[contact] user ack sent to ${email}`);
    } catch (mailErr) {
      console.error("[contact] user ack email failed:", mailErr.message);
    }

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you shortly.",
      data: { id: contact._id },
    });

  } catch (err) {
    console.error("[contact] unhandled error:", err.message, err.stack);
    next(err);
  }
}

module.exports = { validateContact, createContact };