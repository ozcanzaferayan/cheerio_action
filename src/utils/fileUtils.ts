import fs from "fs";
import { UrlSent } from "../model/UrlSent";

const FILE = "./data/db.json";

export const writeMapToFile = function (map: Record<string, UrlSent>) {
  fs.writeFileSync(FILE, JSON.stringify(map, null, 2), "utf-8");
};
export const readMapFromFile = function (): Record<string, UrlSent> {
  if (!fs.existsSync(FILE)) {
    exports.writeMapToFile({});
    return {};
  }
  const content = fs.readFileSync(FILE, "utf-8");
  const json = JSON.parse(content);
  return json;
};
