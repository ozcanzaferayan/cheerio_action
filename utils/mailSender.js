var nodemailer = require("nodemailer");
const { FROM, PASSWORD, TO, SUBJECT, TEXT } = require("./constants");

exports.sendEmailAsync = async function (urlOfItem) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: FROM,
        pass: PASSWORD,
      },
    });

    var mailOptions = {
      from: FROM,
      to: TO,
      subject: SUBJECT,
      text: urlOfItem + " " + TEXT,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
};
