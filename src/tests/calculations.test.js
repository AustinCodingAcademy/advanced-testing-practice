import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    var result = add(1, 2)
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 4 from 5 and return 1", () => {
    var result = subtract(5, 4)
    expect(result).toBe(1);
  });
});

describe("multiply", () => {
  it("should multiply 4 by 5 and return 20", () => {
    var result = multiply(5, 4)
    expect(result).toBe(20);
  });
});

// * subtracts 4 from 5 to equal 1
// * multiply 4 by 5 to equal 20
// * device 100 by 4 to equal 25
