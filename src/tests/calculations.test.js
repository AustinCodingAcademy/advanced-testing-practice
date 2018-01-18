import {add, subtract, multiply, divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("sub", () => {
  it("should subtract 5 from 12 and return 7", () => {
    expect(subtract(12, 5)).toBe(7);
  });
});

describe("multiply", () => {
  it("should multiply 6 and 6, then return 36", () => {
    expect(multiply(6, 6)).toBe(36);
  });
});

describe("divide", () => {
  it("should 36 by 6 and return 6", () => {
    expect(divide(36, 6)).toBe(6);
  });
});
