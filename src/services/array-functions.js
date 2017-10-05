
// in the function map, create a new array and store in a variable
// loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop into the call to fnc
// add the returned value from fnc to the new array
// return the new array
export function map (theArray, fnc) {
  let newArray = [];
  theArray.forEach(function (element) {
    newArray.push(fnc(element));
  });
  return newArray;
}

// implement the most basic sorting algorithm there is
// assume the array will always have numbers
// use a while loop to constantly loop theArray until it is sorted
// use a for loop to loop theArray
// look at the current item and the next item, compare them
// if the items are out of order, swap them
// initialize a variable that indicates if a swap had to be done, set it to false
// if a swap is done set it to true
// after each for loop check the variable, if true, continue the while loop
// if false return theArray

export function sort (theArray) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < theArray.length; i++) {
      if (theArray[i - 1] > theArray[i]) {
        sorted = false;
        let temp = theArray[i - 1];
        theArray[i - 1] = theArray[i];
        theArray[i] = temp;
      }
    }
  }
  return theArray;
}

/* ALT SORT using i=0 and array length - 1

export function sort(theArray) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < theArray.length-1; i++) {
      if (theArray[i] > theArray[i+1]) {
        sorted = false;
        let temp = theArray[i];
        theArray[i] = theArray[i + 1];
        theArray[i + 1] = temp;
      }
    }
  }
  return theArray;
}
*/

// create a new array
// loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
// fnc will return true or false, if true add the item to the new array else do not
// return the new array
export function filter (theArray, fnc) {
  let newArray = [];
  theArray.forEach(function (element) {
    if (fnc(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

// loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
// fnc will return true or false, if true return the item
// return null
export function find (theArray, fnc) {
  let returnValue = '';
  for (let i = 0; i < theArray.length; i++) {
    if (fnc(theArray[i]) === true) {
      returnValue = theArray[i];
      return returnValue;
    } else returnValue = null;
  }
  return returnValue;
}

// return the last item in theArray
export function findLast (theArray) {
  return theArray[(theArray.length - 1)];
}

// create a new array
// loop theArray in reverse order
// add the item from each loop to the new array
// return the new array
export function reverse (theArray) {
  let newArray = [];
  for (let i = 0; i < theArray.length; i++) {
    newArray[i] = theArray[(theArray.length - 1) - i];
  }
  return newArray;
}

// return the first element of the array
export function head (theArray) {
  return theArray[0];
}

// create a new array
// loop theArray
// add the item from each loop to the new array except the first item
// return the new array

export function tail (theArray) {
  let newArray = [];
  for (let i = 1; i < theArray.length; i++) {
    newArray.push(theArray[i]);
  }
  return newArray;
}
