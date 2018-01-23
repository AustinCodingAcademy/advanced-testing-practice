import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
describe("add", () => {
  it("should subtract 4 and 2 result should be 2", () => {
    let result = subtract(4,2)
    expect(result).toBe(2);
  });
});
