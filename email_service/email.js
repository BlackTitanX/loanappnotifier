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
      to: "israelperezmasle2@gmail.com", // list of receivers
      subject: "Hello Team a New loan application has been submitted ✔", // Subject line
      text: "New Application", // plain text body
      html: emailTemplate, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.error("Error sending email:", error);
  }
}



const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Application Submitted</title>
    <style>
        /* Styles for the email template */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h1, p {
            margin-bottom: 20px;
        }
        .application-details {
            border-top: 1px solid #ddd;
            padding-top: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Application Submitted</h1>
        <p>A new application has been submitted. Please review it.</p>
    </div>
</body>
</html>
`;

module.exports = main;
