import {map,filter,find,findLast,head,sort} from "../services/array-functions";
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
function findEvens(number){
  return (number % 2 === 0 ? true : false);
}
//map should preform a function on each element of a given array
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
//filter should take an array and return only specified numbers
describe("filter", () => {
  it("should return an array with only even numbers", () => {
    expect(filter(myNumbers, findEvens)).toEqual([
      4,22,4,2
    ]);
  });
});
//head should find the first element in the array "Jon"
describe("head", () => {
  it("should return the first element of an array 'Jon'", () => {
    expect(head(names)).toEqual("Jon");
  });
});

describe("sort", () => {
  it("should return an array with numbers in order", () => {
    expect(sort(myNumbers)).toEqual([
      1,2,3,4,4,5,7,22,55,99,1913
    ]);
  });
});

//filter should return an array with names of length 3
//["Jon","Bob","Ted","Axe"]

//find should find one name of "Barney"

//findLast should find the last name of "Axe"

//reverse should return an array with the elements in the opposite order
//["Axe","Saul","Robin","Lilly","Barney","Ted","Bob","Jon"]
//tail should return all elements in an array except the first one
//[Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
