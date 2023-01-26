var crypto = require("crypto");

exports.hash = function (input) {
  return crypto.createHash("sha256").update(input).digest("base64");
};
