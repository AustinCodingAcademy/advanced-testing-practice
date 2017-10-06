
//in the function map, create a new array and store in a variable
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop into the call to fnc
//add the returned value from fnc to the new array
//return the new array
export function map(theArray, fnc){
  let newArray = [];
  for(let i = 0; i < theArray.length; i++) {
    newArray.push(fnc(theArray[i]));
  }
  return newArray;
}

//create a new array
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array
export function filter(theArray, fnc){
  let newArray = [];
  for(let i = 0; i < theArray.length; i++) {
    if(fnc(theArray[i])) {
      newArray.push(theArray[i]);
    }
  }
  return newArray;
}


//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true return the item
//return null
export function find(theArray, fnc){
  for(let i = 0; i < theArray.length; i++) {
    if (fnc(theArray[i])) {
      return true;
    }
  }
}


//return the last item in theArray
export function findLast(theArray){
 let last = theArray[theArray.length -1];
  return last;
}

//return the first element of the array
export function head(theArray){
  let first = theArray[0];
  return first;
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
export function reverse(theArray){
  let newArray = [];
  for(let i = theArray.length -1; i >= 0; i--) {
    newArray.push(theArray[i]);
  }
  return newArray;
}


//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
export function tail(theArray){
  let newArray = [];
  for(let i = 1; i < theArray.length; i++) {
    newArray.push(theArray[i]);
    }
    return newArray;
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
  let arr = theArray;
  let sorted;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length -1; i++) {
      if (arr[i] > arr[i +1]) {
        sorted = false;
        let temp;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (sorted) {
      return arr;
    }
  }
}
