import { UrlSent } from "../model/UrlSent";
import { hash } from "./hashUtil";

export function isSentToday(
  dbUrlRecord: Record<string, UrlSent>,
  url: string
): boolean {
  // if (isObjectEmpty(dbUrlRecord)) return true;
  const obj = dbUrlRecord[hash(url)];
  if (!obj?.isSent) return false;
  const sentDate = new Date(obj.date).getTime();
  const today = new Date().getTime();
  const dayDiff = getDayDiff(today, sentDate);
  return dayDiff === 0;
}

export function getDayDiff(today: number, sentDate: number): number {
  return Math.floor((today - sentDate) / (1000 * 60 * 60 * 24));
}

export function isObjectEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}
