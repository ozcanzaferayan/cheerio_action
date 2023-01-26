const { hash } = require("./hashUtil");

exports.isSentToday = function (urlMap, url) {
  const obj = urlMap.get(hash(url));
  if (!obj?.isSent) return false;
  const sentDate = new Date(obj.date);
  const today = new Date();
  const dayDiff = Math.floor((today - sentDate) / (1000 * 60 * 60 * 24));
  return dayDiff === 0;
};
