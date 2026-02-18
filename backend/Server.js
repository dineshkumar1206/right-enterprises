require("dotenv").config();
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// 🔐 Encryption Function
function encrypt(text) {
  if (!process.env.SECRET_KEY || !process.env.SECRET_IV) {
    throw new Error("Encryption keys missing in .env");
  }

  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(process.env.SECRET_KEY, "utf8"),
    Buffer.from(process.env.SECRET_IV, "utf8")
  );

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

// 📩 Send Mail API
app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ error: "All required fields missing" });
    }

    const encryptedEmail = encrypt(email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Encrypted Email:</strong> ${encryptedEmail}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Email Sent Successfully" });

  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
