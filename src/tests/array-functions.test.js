import {map,filter,find,findLast, head, reverse, tail, sort} from "../services/array-functions";
const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
const myNumbers = [4,3,55,22,99,1913,7,5,4,2,1];

function addHello(name){
  return "Hello " + name;
}
function findThree(name){
  return name.length === 3;
}
function findBarney(name){
  return name === "Barney";
}

//***TESTS***

describe("map", () => {
  it("should prepend Hello to each name", () => {
    expect(map(names,addHello)).toEqual([
      "Hello Jon",
      "Hello Bob",
      "Hello Ted",
      "Hello Barney",
      "Hello Lilly",
      "Hello Robin",
      "Hello Saul",
      "Hello Axe"
    ]);
  });
});

describe("filter", () => {
  it("should return an array with 3 names", () => {
    expect(filter(names, findThree)).toEqual([
      "Jon",
      "Bob",
      "Ted",
      "Axe"
    ]);
  });
});

describe("find", () => {
  it("should find one Barney", () => {
    expect(find(names, findBarney)).toEqual("Barney");
  });
});

describe("findLast", () => {
  it("should find the last name", () => {
    expect(findLast(names)).toEqual("Axe");
  });
});

describe("head", () => {
  it("should return the first element of an array 'Jon'", () => {
    expect(head(names)).toEqual("Jon");
  });
});

describe("reverse", () => {
  it("should return an array with elements in opposite order", () => {
    expect(reverse(names)).toEqual([
      "Axe",
      "Saul",
      "Robin",
      "Lilly",
      "Barney",
      "Ted",
      "Bob",
      "Jon"
    ]);
  });
});

describe("tail", () => {
  it("should return all elements in the array except the first", () => {
    const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
    expect(tail(names)).toEqual([
      "Bob",
      "Ted",
      "Barney",
      "Lilly",
      "Robin",
      "Saul",
      "Axe"
    ]);
  });
});

describe("sort", () => {
  it("should return an array with numbers in order", () => {
    expect(sort(myNumbers)).toEqual([
      1,2,3,4,4,5,7,22,55,99,1913
    ]);
  });
});
