import { isSentToday, getDayDiff, isObjectEmpty } from "../utils/dateUtil";
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

    it("should return false when isSent is false", () => {
      const exampleHash = hash("www.example.com");
      const dbUrlRecord = {
        [exampleHash]: {
          isSent: false,
          date: "2023-01-25T22:04:08.655Z",
        },
      };
      const isSent = isSentToday(dbUrlRecord, "www.example.com");
      expect(isSent).toBe(false);
    });

    it("should return false when dbUrlRecord is empty", () => {
      const dbUrlRecord = {};
      const isSent = isSentToday(dbUrlRecord, "www.example.com");
      expect(isSent).toBe(false);
    });
    it("should return true when object is empty", () => {
      const obj = isObjectEmpty({});
      expect(obj).toBe(true);
    });
  });

  describe("getDayDiff", () => {
    it("should return 3 when given 3 days before", () => {
      const dayDiff = getDayDiff(
        new Date().getTime(),
        new Date("2023-01-24T20:00:00.000Z").getTime()
      );
      expect(dayDiff).toBe(3);
    });
  });
});
