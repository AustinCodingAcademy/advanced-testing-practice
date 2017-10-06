import {map,filter,find,findLast} from "../services/array-functions";
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

//head should find the first element in the array "Jon"
describe("head", () => {
  it("should return the first element of an array 'Jon'", () => {
    expect(head(names)).toEqual("Jon");
  });
});


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

describe("sort", () => {
  it("should return an array with numbers in order", () => {
    expect(sort(myNumbers)).toEqual([
      1,2,3,4,5,7,22,55,99,1913
    ]);
  });
});

describe("filter", () => {
  it("should return array with names of length 3", () => {
    expect(filter(names), findThree).toEqual(["Jon", "Bob", "Ted", "Axe"]);
  });
});//filter should return an array with names of length 3
//["Jon","Bob","Ted","Axe"]

describe("find", () => {
  it("should find the single name of Barney", () => {
    expect(find(names), findBarney).toEqual("Barney");
  });
});//find should find one name of "Barney"

describe("findLast", () => {
  it("should find the last name in the array", () => {
    expect(findLast(names)).toEqual("Axe");
  });
});//findLast should find the last name of "Axe"

describe("reverse", () => {
  it("should return array with elements in opposing order", () => {
    expect(reverse(names)).toEqual(["Axe","Saul","Robin","Lilly","Barney","Ted","Bob","Jon"]);
  });
});//reverse should return an array with the elements in the opposite order
//["Axe","Saul","Robin","Lilly","Barney","Ted","Bob","Jon"]


describe("tail", () => {
  it("should return all elements except in array except first item", () => {
    expect(tail(names)).toEqual(["Bob","Ted","Barney","Lilly","Robin","Saul","Axe"]);
  });
});//tail should return all elements in an array except the first one
//[Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
