
//in the function map, create a new array and store in a variable
//loop theArray and call the fnc ( fnc() )for each thing in the array, 
//     passing in the item from the current loop into the call to fnc
//add the returned value from fnc to the new array
//return the new array (1.square brackets, 2.for loop, add item=push in js syntax, all these functions use 'loop')
export function map(theArray, fnc){
    var newArray = [];
    for(var i = 0; i < theArray.length; i ++){
        var currentItem = theArray[i];
        fnc(currentItem);  //pass in the 'thing'
        var returnedItem = fnc(currentItem);
        newArray.push(returnedItem); //newArray[i] = (returnedItem) 
    }
    return newArray; //outside of the loop so that it only happens once.
}

//create a new array
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array
export function filter(theArray, fnc){
    var shortNamesArray = [];
    for(var i = 0; i < theArray.length; i ++){
        var currentItem = theArray[i];
        fnc(currentItem);
        var returnedItem = fnc(currentItem);
        if (returnedItem = true) {
            shortNamesArray.push(returnedItem);
        }
    }
    // console.log(shortNameArray);
    return shortNameArray;
}


//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//return null
export function find(theArray, fnc){
    for(var i = 0; i < theArray.length; i ++){
        var currentItem = theArray[i];
        fnc(currentItem);
        var returnedItem = fnc(currentItem);
        if (returnedItem) {
            return returnedItem;
        } else {
            return null;
        }
    }
    // console.log(returnedItem);
}


//return the last item in theArray
export function findLast(theArray){

}

//return the first element of the array
export function head(theArray){

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

}