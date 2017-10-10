import {add, subtract, multiply, divide} from "../services/calculations";

// ADD
describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    var result = add(1, 2);
    expect(result).toBe(3);
  });
});

// Subtract
describe("subtract", () => {
  it("should subtract 3 against 2 and return 1", () => {
    var result = subtract(3, 2);
    expect(result).toBe(1);
  });
});

// Multiply
describe("multiply", () => {
  it("should multiply 2 and 3 and return 6", () => {
    var result = multiply(2, 3);
    expect(result).toBe(6);
  });
});

// Divide
describe("divide", () => {
  it("should divide 6 by 2 and return 3", () => {
    var result = divide(6, 2);
    expect(result).toBe(3);
  });
});
