const cheerio = require("cheerio");
const fetch = require("node-fetch");
var nodemailer = require("nodemailer");
require("dotenv").config();

(async function () {
  const urlOfItems = process.env.URL_ITEMS.split(";");
  urlOfItems.map(async (url) => {
    const res = await fetch(url);
    const resText = await res.text();
    const $ = cheerio.load(resText, { xmlMode: true });
    const stockState = $(".add-to-cart__btn>span").text();
    const isAvailable = stockState !== "YAKINDA STOKTA";
    if (isAvailable) {
      sendMail();
    }
  });
})();

function sendEmail() {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_ADDRESS_FROM,
      pass: process.env.MAIL_PASSWORD_FROM_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.MAIL_ADDRESS_FROM,
    to: process.env.MAIL_ADDRESS_TO,
    subject: process.env.MAIL_SUBJECT,
    text: process.env.MAIL_TEXT,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
