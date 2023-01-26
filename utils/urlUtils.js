const cheerio = require("cheerio");
const axios = require("axios");

const { hash } = require("./hashUtil");
const { isSentToday } = require("./dateUtil");
const { sendEmailAsync } = require("./mailSender");
const {
  URLS,
  TARGET_DOM_ELEMENT_QUERY,
  TARGET_DOM_ELEMENT_CURRENT_TEXT,
} = require("./constants");

exports.iterateUrls = async function (urlMap) {
  await Promise.all(
    URLS.map(async (url) => {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const stockStatus = $(TARGET_DOM_ELEMENT_QUERY).text();
      const isAvailable = stockStatus !== TARGET_DOM_ELEMENT_CURRENT_TEXT;
      let isSent = isSentToday(urlMap, url);
      if (!isSent && isAvailable) {
        isSent = await sendEmailAsync(url);
      }
      urlMap.set(hash(url), {
        isSent: isSent,
        date: new Date().toISOString(),
      });
    })
  );
};
