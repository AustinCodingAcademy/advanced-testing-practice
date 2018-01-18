import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 4 from 2 and return 2", () => {
    expect(subtract(4, 2)).toBe(2);
  });
});

describe("multiply", () => {
  it("should multiply 5 by 5 and return 25", () => {
    expect(multiply(5, 5)).toBe(25);
  });
});

describe("divide", () => {
  it("should 16 by 2 and return 8", () => {
    expect(divide(16, 2)).toBe(8);
  });
});
