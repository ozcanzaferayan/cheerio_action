require("dotenv").config();
exports.URLS = process.env.URL_ITEMS.split(";");
exports.TARGET_DOM_ELEMENT_QUERY = process.env.TARGET_DOM_ELEMENT_QUERY;
exports.TARGET_DOM_ELEMENT_CURRENT_TEXT =
  process.env.TARGET_DOM_ELEMENT_CURRENT_TEXT;
exports.FROM = process.env.MAIL_ADDRESS_FROM;
exports.PASSWORD = process.env.MAIL_PASSWORD_FROM_PASSWORD;
exports.TO = process.env.MAIL_ADDRESS_TO;
exports.SUBJECT = process.env.MAIL_SUBJECT;
exports.TEXT = process.env.MAIL_TEXT;
