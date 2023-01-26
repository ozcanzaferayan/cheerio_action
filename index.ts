import { writeMapToFile, readMapFromFile } from "./src/utils/fileUtils";
import { iterateUrls } from "./src/utils/urlUtils";

(async function () {
  const urlMap = readMapFromFile();
  await iterateUrls(urlMap);
  writeMapToFile(urlMap);
})();
