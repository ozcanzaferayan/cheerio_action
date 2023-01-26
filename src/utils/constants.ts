require("dotenv").config();
export const URLS = process.env.URL_ITEMS?.split(";") as string[];
export const TARGET_DOM_ELEMENT_QUERY = process.env.TARGET_DOM_ELEMENT_QUERY;
export const TARGET_DOM_ELEMENT_CURRENT_TEXT =
  process.env.TARGET_DOM_ELEMENT_CURRENT_TEXT;
export const FROM = process.env.MAIL_ADDRESS_FROM;
export const PASSWORD = process.env.MAIL_PASSWORD_FROM_PASSWORD;
export const TO = process.env.MAIL_ADDRESS_TO;
export const SUBJECT = process.env.MAIL_SUBJECT;
export const TEXT = process.env.MAIL_TEXT;
