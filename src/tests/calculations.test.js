import {add, subtract, multiple,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    let result = add(1,2);
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 2 and 3 and return 1", () => {
    let result = subtract(3,2);
    expect(result).toBe(1);
  });
});

describe("multiple", () => {
  it("should multiply 3 and 2 and return 6", () => {
    let result = multiple(3,2);
    expect(result).toBe(6);
  });
});

describe("divide", () => {
  it("should divide 12 and 3 and return 4", () => {
    let result = divide(12,3);
    expect(result).toBe(4);
  });
});
