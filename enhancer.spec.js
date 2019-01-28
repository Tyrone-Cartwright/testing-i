const enhanced = require("./enhancer");

const item = {
  origName: "Lambda Axe",
  name: "[+8] Lambda Axe",
  type: "armour",
  durability: 90,
  enhancement: 20
};
const itemE = {
  origName: "Lambda Axe",
  name: "[+21] Lambda Axe",
  type: "armour",
  durability: 90,
  enhancement: 21
};

describe("enhancement library", () => {
  describe("success() method", () => {
    test("should take in an obj and return an enhanced obj", () => {
      expect(enhanced.success(item)).toEqual(itemE);
    });
    test("should throw error when item exceeds twenty", () => {
      expect(() => {
        enhanced.success(itemE);
      }).toThrow();
    });
  });
  //   describe("fail() method", () => {
  //     test("should take in an object and return a object with failed enhancer", () => {
  //       expect(enhanced.fail()).toBe(null);
  //     });
  //   });
  //   describe("repair() method", () => {
  //     test("should take in an obj and return a obj with failed enhancer", () => {
  //       expect(enhanced.repair()).toBe(null);
  //     });
  //   });
});
