import { UrlSent } from "../model/UrlSent";
import { hash } from "./hashUtil";

export function isSentToday(
  dbUrlRecord: Record<string, UrlSent>,
  url: string
): boolean {
  const obj = dbUrlRecord[hash(url)];
  if (!obj?.isSent) return false;
  const sentDate = new Date(obj.date).getTime();
  const today = new Date().getTime();
  const dayDiff = Math.floor((today - sentDate) / (1000 * 60 * 60 * 24));
  return dayDiff === 0;
}
