const nodemailer = require("nodemailer");
const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post("/", async (req, res) => {
    console.log("Received Data:", req.body);

    try {
        const { name, email, message } = req.body;

        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();
         console.log("DOCUMENT SAVED");
         await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: "New Portfolio Contact Message",
  text: `
Name: ${name}
Email: ${email}

Message:
${message}
`,
});


console.log("EMAIL SENT");

        res.status(201).json({
            message: 'Message sent successfully'
        });

    } catch(error) {
        console.log("ERROR:", error);

        res.status(500).json({
            message: 'Failed to send message'
        });
    }
});


module.exports = router;