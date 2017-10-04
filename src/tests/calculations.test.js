import {add, subtract, multiple,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 2 from 3 and return 1", () => {
    expect(subtract(3, 2)).toBe(1);
  });
});

describe("multiple", () => {
  it("should multiply 2 and 3 and return 6", () => {
    expect(multiple(2, 3)).toBe(6);
  });
});

describe("divide", () => {
  it("should divide 3 from 6 and return 2", () => {
    expect(divide(6, 3)).toBe(2);
  });
});
