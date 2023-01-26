import { isSentToday } from "../utils/dateUtil";
import { hash } from "../utils/hashUtil";

describe("dateUtil", () => {
  describe("isSentToday", () => {
    it("should return true when giving same day", () => {
      const exampleHash = hash("www.example.com");
      const wikipediaHash = hash("www.wikipedia.com");
      const dbUrlRecord = {
        [exampleHash]: {
          isSent: true,
          date: "2023-01-26T22:04:08.655Z",
        },
        [wikipediaHash]: {
          isSent: true,
          date: "2023-01-26T22:04:08.655Z",
        },
      };
      const isSent = isSentToday(dbUrlRecord, "www.example.com");
      expect(isSent).toBe(true);
    });

    it("should return false when giving 24 hours later", () => {
      const exampleHash = hash("www.example.com");
      const dbUrlRecord = {
        [exampleHash]: {
          isSent: true,
          date: "2023-01-25T22:04:08.655Z",
        },
      };
      const isSent = isSentToday(dbUrlRecord, "www.example.com");
      expect(isSent).toBe(false);
    });
  });
});
