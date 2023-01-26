const fs = require("fs");
const FILE = "./data/db.json";
exports.writeMapToFile = function (map) {
  fs.writeFileSync(FILE, JSON.stringify(Object.fromEntries(map)), "utf-8");
};
exports.readMapFromFile = function () {
  if (!fs.existsSync(FILE)) {
    exports.writeMapToFile(new Map());
    return new Map();
  }
  const content = fs.readFileSync(FILE, "utf-8");
  const json = JSON.parse(content);
  const entries = Object.entries(json);
  return new Map(entries);
};
