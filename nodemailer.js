const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: 'persona.cuenta0280@gmail.com',
      pass: 'zinbvupntfconpxk'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "persona.cuenta0280@gmail.com", // sender address
    to: "lgonzalez@indocafe.gob.do", // list of receivers
    subject: "Pueba de klk ✔", // Subject line
    text: "dime se te llego la cosa?", // plain text body
    html: "<b>Pueba de klk</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

}

main()
