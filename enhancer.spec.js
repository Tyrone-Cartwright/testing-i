const enhanced = require("./enhancer");

describe("enhancement library", () => {
  describe("success() method", () => {
    test("should take in an obj and return an enhanced obj", () => {
      expect(enhanced.succeed()).toBe(null);
    });
  });
  describe("fail() method", () => {
    test("should take in an object and return a object with failed enhancer", () => {
      expect(enhanced.fail()).toBe(null);
    });
  });
  describe("repair() method", () => {
    test("should take in an obj and return a obj with failed enhancer", () => {
      expect(enhanced.repair()).toBe(null);
    });
  });
});
