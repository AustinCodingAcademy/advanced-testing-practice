import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    var result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 3 and 2 and return 1", () => {
    var result = subtract(3, 2);
    expect(result).toBe(1);
  });
});

describe("multiply", () => {
  it("should multiply 3 and 2 and return 6", () => {
    var result = multiply(3, 2);
    expect(result).toBe(6);
  });
});

describe("divide", () => {
  it("should divide 6 and 3 and return 2", () => {
    var result = divide(6, 3);
    expect(result).toBe(2);
  });
});