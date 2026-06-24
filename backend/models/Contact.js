const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: 150,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 20,
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: 5000,
    },
    status: {
      type: String,
      enum: ["new", "read", "responded"],
      default: "new",
    },
    notifiedAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
