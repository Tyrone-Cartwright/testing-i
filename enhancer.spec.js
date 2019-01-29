const enhanced = require("./enhancer");

describe("Testing enhancing system", () => {
  describe("succes() method", () => {
    const original = {
      originalName: "Titan",
      name: "Titan",
      type: "weapon",
      durability: 100,
      level: 15
    };

    const expected = {
      originalName: "Titan",
      name: "PRI Titan",
      type: "weapon",
      durability: 100,
      level: 16
    };

    it("should increase the level of the item by 1", () => {
      const item = enhanced.success(original);
      expect(item).toEqual(expected);
    });
  });

  describe("fail() method", () => {
    const original = {
      originalName: "Titan",
      name: "[+5] Titan",
      type: "weapon",
      durability: 80,
      level: 5
    };

    const weapon = {
      originalName: "Titan",
      name: "[+10] Titan",
      type: "weapon",
      durability: 80,
      level: 10
    };

    const expected = {
      originalName: "Titan",
      name: "[+10] Titan",
      type: "weapon",
      durability: 75,
      level: 10
    };

    it("should fail an enchancement", () => {
      expect(enhanced.fail(weapon)).toEqual(expected);
      expect(() => enhanced.fail(original)).toThrow();
    });
  });

  describe("repair() method", () => {
    const original = {
      originalName: "Titan",
      name: "PRI Titan",
      type: "weapon",
      durability: 40,
      level: 16
    };

    const expected = {
      originalName: "Titan",
      name: "PRI Titan",
      type: "weapon",
      durability: 100,
      level: 16
    };

    it("should increase the level of the item by 1", () => {
      const item = enhanced.repair(original);
      expect(item).toEqual(expected);
    });
  });
});
