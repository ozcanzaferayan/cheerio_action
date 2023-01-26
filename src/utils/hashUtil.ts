import crypto from "crypto";

export function hash(input: string): string {
  return crypto.createHash("sha256").update(input).digest("base64");
}
