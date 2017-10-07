import {add, subtract, multiple,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});


describe("subtract", () => {
  it("should subtract 2 from 3 and return 1", () => {
    expect(subtract(3,2)).toBe(1);
  });
});

describe("multiply", () => {
  it("should multiply 2 and 2 and return 4", () => {
    expect(multiple(2,2)).toBe(4);
  });
});

describe("divide", () => {
  it("should divide 2 into 4 and return 2", () => {
    expect(divide(4,2)).toBe(2);
  });
});
