import {add, subtract, multiple, divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 2 from 1 and return -1", () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});

describe("multiple", () => {
  it("should multiply 1 by 2 and return 2", () => {
    expect(multiple(1, 2)).toBe(2);
  });
});

describe("divide", () => {
  it("should divide 1 by 2 and return 0.5", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
});
