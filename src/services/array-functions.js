
//in the function map, create a new array and store in a variable
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop into the call to fnc
//add the returned value from fnc to the new array
//return the new array
export function map(theArray, fnc){
  let myArray = [];
  for(let i = 0; i < theArray.length; i++){
    let athing = fnc(theArray[i]);
    myArray.push(athing);
  }
  return myArray;
}






//create a new array
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array


export function filter(theArray, fnc){
  const newArray = [];
  for (let i = 0; i < theArray.length; i++){
    let someThing = fnc(theArray[i]);
    if (someThing){
      newArray.push(theArray[i])
}
}
      return newArray;


};





//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true return the item
//return null
export function find(theArray, fnc){
  for(let i = 0; i < theArray.length; i++) {
    let stuff = fnc(theArray[i]);

    if (fnc(theArray[i])) {
     return [theArray[i]];
    }
  }
  return null;
}





//   below works but have to do it without using find
//   var newArray = [];
//   newArray.push(theArray.find(fnc))
//   return newArray;
// }


//return the last item in theArray
export function findLast(names){
  return names.slice(-1);
}

//return the first element of the array
export function head(names){
  return names[0];

}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
export function reverse(theArray){
  var reverseArr = theArray.reverse();
  return reverseArr;
}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
export function tail(theArray){
  var tailArr = theArray.splice(0).reverse();
  return tailArr;
}

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
export function sort(theArray){
theArray.sort((a, b) => a - b);
return theArray;

  };
