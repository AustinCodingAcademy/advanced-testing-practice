import {add, subtract, multiple, divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 2 and 1 and return 1", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

describe("multiply", () => {
  it("should multiply 2 and 2 and return 4", () => {
    expect(multiple(2, 2)).toBe(4);
  });
});

describe("divide", () => {
  it("should divide 3 and 3 and return 1", () => {
    expect(divide(3, 3)).toBe(1);
  });
});

describe("extra", () => {
  it("this is an extra test", () => {
    expect(true).toBe(true);
  });
});
