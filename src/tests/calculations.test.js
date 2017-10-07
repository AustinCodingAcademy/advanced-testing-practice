import {add, subtract, multiply, divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    var result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 1 from 2 and return 1", () => {
    var result = subtract(2, 1);
    expect(result).toBe(1);
  });
});

describe("multiply", () => {
  it("should multiply 1 by 2 and return 2", () => {
    var result = multiply(1, 2);
    expect(result).toBe(2);
  });
});

describe("divide", () => {
  it("should divide 2 by 1 and return 2", () => {
    var result = divide(2, 1);
    expect(result).toBe(2);
  });
});
