import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  it("subtracts 4 from 5 to equal 1", () => {
    const result = subtract(5, 4);
    expect(result).toBe(1);
  });
});

describe("multiply", () => {
  it("multiply 4 by 5 to equal 20", () => {
    const result = multiply(4, 5);
    expect(result).toBe(20);
  });
});

describe("divide", () => {
  it("divide 100 by 4 to equal 25", () => {
    const result = divide(100, 4);
    expect(result).toBe(25);
  });
});
