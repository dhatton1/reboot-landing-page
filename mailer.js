const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(data){

  console.log(process.env.INFO_EMAIL);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.INFO_EMAIL, // generated ethereal user
      pass: process.env.INFO_EMAIL_PASSWORD // generated ethereal password
    }
  });

  const messageContent = `<p>Name: ${data.name}\n</p>
    <p>Email: ${data.email}\n</p>
    <p>Phone: ${data.phone}\n</p>
    <p>LinkedIn Account: ${data.linkedin}.</p>`;

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'timothyhaydenhawkins@gmail.com', // sender address
    to: data.email, // list of receivers
    subject: `New message from ${data.name}`, // Subject line
    html: messageContent, // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)
  console.log("Message sent: %s", info.messageId);
}

module.exports = {
  sendEmail,
}