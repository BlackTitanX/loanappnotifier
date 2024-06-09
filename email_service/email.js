const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465
  auth: {
    user: "israelperezmasle2@gmail.com",
    pass: process.env.email_credential, // Ensure this matches the environment variable name
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Israel Perez" <israelperezmasle2@gmail.com>', // sender address
      to: "israelperezmasle2@gmail.com, jireini509mejia@gmail.com", // list of receivers
      subject: "Hello Team a New loan application has been submitted ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = main;
