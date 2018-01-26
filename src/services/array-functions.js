
//Your boss has told you to build a function called map. Follow these instructions to do so.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//on the first line, create a new empty array and store in a variable named whatever you want (myNewArray)
//loop theArray and extract the single item from the array per loop and store it in a variable
//on each loop call fnc() passing in the item from the current loop into the call to fnc
//fnc is a function that must return something, capture whatever it returns in a variable
//add the returned value from fnc to the new array
//after looping, return the new array
export function map(theArray, fnc){
  const myNewArray = [];
  for (let i=0; i<theArray.length; i++){
    const temp = theArray[i];
    const returned = fnc(temp);
    myNewArray.push(returned);
  };
  return myNewArray;
};

//create a new array
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array
export function filter(theArray, fnc){
  let newArray = [];
  for (let i=0;i<theArray.length;i++) {
    const value = fnc(theArray[i]);
    if(value){
      newArray.push(theArray[i])
    };
  };
  return newArray;
};


//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true return the item
//return null
export function find(theArray, fnc){
  for(let i=0;i<theArray.length;i++) {
    const bool = fnc(theArray[i]);
    if(bool){
      return theArray[i];
    };
  };
};


//return the last item in theArray
export function findLast(theArray){
  return theArray[theArray.length-1];
};

//return the first element of the array
export function head(theArray){
  return theArray[0];
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
export function reverse(theArray){

}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
export function tail(theArray){

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
  let swap = false;
  for(let i=0;i<theArray.length;i++) {
    if(theArray[i] > theArray[i+1]) {
      let temp = theArray[i];
      theArray[i] = theArray[i+1]
      theArray[i+1] = temp;
      swap = true;
    }
  }
  if (swap) {
    swap = false;
    return sort(theArray);
  } else {
    return theArray;
  }
}
