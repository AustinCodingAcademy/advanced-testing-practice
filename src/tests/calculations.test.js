import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});


describe("subtract", () => {
  it("it should subtract 1 from 2 and return 1", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});


describe("divide", () => {
  it("it should divide 4 by 2 and return 2", () => {
    expect(divide(4, 2)).toBe(2);
  });
});

describe("multiply", () => {
  it("it should multiply 2 by 4 and return 8", () => {
    expect(multiply(2, 4)).toBe(8);
  });
});