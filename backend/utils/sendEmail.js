const nodemailer = require("nodemailer");

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 8000,
  });
}

async function sendEmail({ to, subject, html, text, replyTo }) {
  // Validate required env vars before even trying to connect
  const missing = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"].filter(
    (k) => !process.env[k]
  );
  if (missing.length) {
    throw new Error(`Missing SMTP env vars: ${missing.join(", ")}`);
  }

  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to,
    subject,
    html,
    text,
  };
  if (replyTo) mailOptions.replyTo = replyTo;

  return transporter.sendMail(mailOptions);
}

async function sendAdminNotification(contact) {
  const { fullname, email, phone, message, createdAt, _id } = contact;

  const submittedAt = new Date(createdAt || Date.now()).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#04060f;border-bottom:2px solid #00bcd4;padding-bottom:8px;">
        New Contact Form Submission
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr><td style="padding:8px 0;width:120px;color:#555;"><strong>Name</strong></td>
            <td style="padding:8px 0;">${escapeHtml(fullname)}</td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Email</strong></td>
            <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Phone</strong></td>
            <td style="padding:8px 0;">${phone ? escapeHtml(phone) : "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#555;vertical-align:top;"><strong>Message</strong></td>
            <td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Submitted</strong></td>
            <td style="padding:8px 0;">${submittedAt}</td></tr>
        ${_id ? `<tr><td style="padding:8px 0;color:#555;"><strong>Record ID</strong></td>
                     <td style="padding:8px 0;">${_id}</td></tr>` : ""}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#999;">
        Sent automatically from the contact form on goklyn.in
      </p>
    </div>`;

  const text =
    `New Contact Form Submission\n\n` +
    `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone || "—"}\n` +
    `Message: ${message}\nSubmitted: ${submittedAt}\n`;

  return sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${fullname}`,
    html,
    text,
    replyTo: email,
  });
}

async function sendUserAcknowledgement(contact) {
  const { fullname, email } = contact;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#04060f;">Thanks for reaching out, ${escapeHtml(fullname)}!</h2>
      <p style="color:#333;line-height:1.6;">
        We've received your message and a member of the Goklyn team will get back to you shortly.
      </p>
      <p style="color:#333;line-height:1.6;">
        In the meantime, feel free to explore more at <a href="https://goklyn.in">goklyn.in</a>.
      </p>
      <p style="margin-top:24px;color:#333;">— Team Goklyn</p>
    </div>`;

  return sendEmail({
    to: email,
    subject: "We've received your message — Goklyn Private Limited",
    html,
    text: `Hi ${fullname},\n\nWe've received your message and will get back to you shortly.\n\n— Team Goklyn`,
  });
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

module.exports = { sendEmail, sendAdminNotification, sendUserAcknowledgement };