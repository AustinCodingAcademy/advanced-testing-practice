import {add, subtract, multiple,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 1 from 2 and return 1", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

describe("multiple", () => {
  it("should multiply 3 by 5 and return 15", () => {
    expect(multiple(3, 5)).toBe(15);
  });
});

describe("divide", () => {
  it("should divide 4 by 2 and return 2", () => {
    expect(divide(4, 2)).toBe(2);
  });
});
