import {map,filter,find,findLast,head,reverse,sort,tail} from "../services/array-functions";
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
function isFour(number){
  return (number === 4 ? true : false);
}
function isEleven(number){
  return (number === 11 ? true : false);
}
// Tests //
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
//[4,22,4,2]
describe("filter", () => {
  it("should return an array with only even numbers", () => {
    expect(filter(myNumbers, findEvens)).toEqual([
      4,22,4,2
    ]);
  });
});
//find should return an item if it passes the fnc passed
//otherwise should return null
describe("find", () => {
  it("should return 4 when 4 is in array and passes test", () => {
    expect(find(myNumbers, isFour)).toEqual(4);
  });
  it("should return null when no item passes test", () =>{
    expect(find(myNumbers, isEleven)).toEqual(null);
  });
});
//findLast should return the last item in an array
//"Axe"
describe("findLast", () => {
  it("should return the lat item in an array 'Axe'", () => {
    expect(findLast(names)).toEqual("Axe");
  });
});
//head should find the first element in the array
//"Jon"
describe("head", () => {
  it("should return the first element of an array 'Jon'", () => {
    expect(head(names)).toEqual("Jon");
  });
});
//reverse should return the input array backwards
//[1,2,4,5,7,1913,99,22,55,3,4]
describe("reverse", () => {
  it("should return the array in reverse", () => {
    expect(reverse(myNumbers)).toEqual([
      1,2,4,5,7,1913,99,22,55,3,4
    ]);
  });
});
//tail should return the input array less the first item
//[3,55,22,99,1913,7,5,4,2,1]
describe("tail", () => {
  it("should return the array less the first item", () => {
    expect(tail(myNumbers)).toEqual([
      3,55,22,99,1913,7,5,4,2,1
    ]);
  });
});
//sort should return a sorted array
//[1,2,3,4,4,5,7,22,55,99,1913]
describe("sort", () => {
  it("should return an array with numbers in order", () => {
    expect(sort(myNumbers)).toEqual([
      1,2,3,4,4,5,7,22,55,99,1913
    ]);
  });
});
