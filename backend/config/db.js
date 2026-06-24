const mongoose = require("mongoose");

let cached = global._mongoConn || null;

const connectDB = async () => {
  if (cached && mongoose.connection.readyState === 1) {
    return cached;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Add it to your Vercel environment variables."
    );
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, // fail fast instead of hanging 30s
      socketTimeoutMS: 45000,
    });
    cached = conn;
    global._mongoConn = conn;
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  
    throw error;
  }
};

module.exports = connectDB;