import nodemailer from "nodemailer";
import { UrlSent } from "../model/UrlSent";
import { FROM, PASSWORD, TO, SUBJECT, TEXT } from "./constants";

export const sendEmailAsync = async function (urlOfItem: string) {
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

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
};
