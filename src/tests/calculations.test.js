//importing code from other files
import {add, subtract, multiple,divide} from "../services/calculations";

// describe - what are you Testing
// it - it should do this
// both are keywords in testing library
// jest follows english words

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    var result = add(1,2);
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 1 from 3 and return 2", () => {
    var result = subtract(3,1);
    expect(result).toBe(2);
  });
});
describe("multiple", () => {
  it("should multiply 2 and 3 and return 6", () => {
    var result = multiple(2,3);
    expect(result).toBe(6);
  });
});
describe("divide", () => {
  it("should divide 21 by 3 and return 7", () => {
    var result = divide(21,3);
    expect(result).toBe(7);
  });
});
