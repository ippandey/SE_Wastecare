const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
let requests = [];

// Create transporter once
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "8b8374001@smtp-brevo.com",
    pass: "RdwB6OPMvUNF5gmp",
  },
});

// POST request handler
app.post("/api/request-collection", (req, res) => {
  const { name, email, phone, address, pickupDate, message } = req.body;

  if (!name || !email || !phone || !address || !pickupDate) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newRequest = {
    id: requests.length + 1,
    name,
    email,
    phone,
    address,
    pickupDate,
    message,
  };

  requests.push(newRequest);

  const mailOptions = {
    from: '"Sanchita Enterprises" <priyanshupandey2806@gmail.com>',
    to: email,
    subject: "Confirmation of Your Garbage Collection Request",
    text: `
  Dear ${name},
  
  Thank you for choosing Sanchita Enterprises for your garbage collection needs.
  
  We are pleased to confirm that your pickup request has been scheduled as per the following details:
  
  ------------------------------------------------------------
  📅 Pickup Date: ${pickupDate}
  🏠 Pickup Address: ${address}
  📞 Contact Number: ${phone}
  ------------------------------------------------------------
  
  Our team will arrive on the scheduled date to ensure safe and responsible disposal. Please ensure that the waste materials are properly packed and placed at the designated pickup spot before our arrival.
  
  If you have any special instructions or need to reschedule, feel free to reply to this email or contact our support team at support@sanchitaenterprises.com.
  
  Thank you once again for trusting Sanchita Enterprises. We are committed to providing you with excellent and timely service.
  
  Warm Regards,  
  Team Sanchita Enterprises  
  www.sanchitaenterprises.com
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error sending email:", err);
      return res.status(500).json({ message: "Email sending failed." });
    }

    console.log("Email sent: " + info.response);
    res.status(200).json({
      message: "Garbage collection request received successfully.",
      request: newRequest,
    });
  });
});

// GET all requests
app.get("/api/requests", (req, res) => {
  res.status(200).json(requests);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
