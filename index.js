const { writeMapToFile, readMapFromFile } = require("./utils/fileUtils");
const { iterateUrls } = require("./utils/urlUtils");

(async function () {
  const urlMap = readMapFromFile();
  await iterateUrls(urlMap);
  writeMapToFile(urlMap);
})();
