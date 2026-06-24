const nodemailer = require("nodemailer");

// Reuse a single transporter instance across requests
let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

/**
 * Sends an email.
 * @param {Object} options
 * @param {string} options.to
 * @param {string} options.subject
 * @param {string} options.html
 * @param {string} [options.text]
 * @param {string} [options.replyTo]
 */
async function sendEmail({ to, subject, html, text, replyTo }) {
  const mailer = getTransporter();

  const mailOptions = {
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to,
    subject,
    html,
    text,
  };

  if (replyTo) {
    mailOptions.replyTo = replyTo;
  }

  return mailer.sendMail(mailOptions);
}

/**
 * Builds and sends the "new contact form submission" notification to the admin inbox.
 */
async function sendAdminNotification(contact) {
  const { fullname, email, phone, message, createdAt, _id } = contact;

  const submittedAt = new Date(createdAt || Date.now()).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color:#04060f;border-bottom:2px solid #00bcd4;padding-bottom:8px;">
        New Contact Us Submission
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr>
          <td style="padding:8px 0;width:120px;color:#555;"><strong>Name</strong></td>
          <td style="padding:8px 0;">${escapeHtml(fullname)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#555;"><strong>Email</strong></td>
          <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#555;"><strong>Phone</strong></td>
          <td style="padding:8px 0;">${phone ? escapeHtml(phone) : "—"}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#555;vertical-align:top;"><strong>Message</strong></td>
          <td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(message)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#555;"><strong>Submitted</strong></td>
          <td style="padding:8px 0;">${submittedAt}</td>
        </tr>
        ${_id ? `<tr><td style="padding:8px 0;color:#555;"><strong>Record ID</strong></td><td style="padding:8px 0;">${_id}</td></tr>` : ""}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#999;">
        This message was sent automatically by the contact form on goklyn.in.
      </p>
    </div>
  `;

  const text =
    `New Contact Us Submission\n\n` +
    `Name: ${fullname}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || "—"}\n` +
    `Message: ${message}\n` +
    `Submitted: ${submittedAt}\n`;

  return sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${fullname}`,
    html,
    text,
    replyTo: email,
  });
}

/**
 * Optional short acknowledgement email sent back to the person who submitted the form.
 */
async function sendUserAcknowledgement(contact) {
  const { fullname, email } = contact;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color:#04060f;">Thanks for reaching out, ${escapeHtml(fullname)}!</h2>
      <p style="color:#333;line-height:1.6;">
        We've received your message and a member of the Goklyn team will get back to you shortly.
      </p>
      <p style="color:#333;line-height:1.6;">
        In the meantime, feel free to explore more about us at
        <a href="https://goklyn.in">goklyn.in</a>.
      </p>
      <p style="margin-top:24px;color:#333;">— Team Goklyn</p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject: "We've received your message — Goklyn Private Limited",
    html,
    text: `Hi ${fullname},\n\nWe've received your message and will get back to you shortly.\n\n— Team Goklyn`,
  });
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = { sendEmail, sendAdminNotification, sendUserAcknowledgement };
