
//in the function map, create a new array and store in a variable
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop into the call to fnc
//add the returned value from fnc to the new array
//return the new array
export function map(theArray, fnc){
    var myArray = [];
    var theArrayLength = theArray.length;
    for (var i = 0; i < theArrayLength; i++) {
        myArray[i]=fnc(theArray[i]);
    }
    return myArray;
}

//create a new array
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array
export function filter(theArray, fnc){
    var myArray = [];
    var theArrayLength = theArray.length;
    for (var i = 0; i < theArrayLength; i++) {
        if (fnc(theArray[i])){
            myArray.push(theArray[i]);
        }
    }
    return myArray;
}


//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//return null
export function find(theArray, fnc){
    var theArrayLength = theArray.length;
    for (var i = 0; i < theArrayLength; i++) {
        if (fnc(theArray[i])){
            return theArray[i];
        }
    }
    return null;
}


//return the last item in theArray
export function findLast(theArray){
    var length = theArray.length;
    return theArray[length-1];

}

//return the first element of the array
export function head(theArray){
    return theArray[0];
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
export function reverse(theArray){
    var myArray = [];
    var theArrayLength = theArray.length;
    for (var i = theArrayLength-1; i >= 0; i--) {
        myArray.push(theArray[i]);
    }
    return myArray;
}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
export function tail(theArray){
    var myArray = [];
    var theArrayLength = theArray.length;
    for (var i = 1; i < theArrayLength; i++) {
        myArray.push(theArray[i]);
    }
    return myArray;

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
    function swap(a, b){
        var temp = theArray[a];
        theArray[a] = theArray[b];
        theArray[b] = temp;
    }
    var flag;
    var theArrayLength = theArray.length;
    while(true){
        flag = false;
        for (var i = 0; i < theArrayLength; i++) {
            if (theArray[i] > theArray[i+1]){
                swap(i, i+1);
                flag = true;
            }
        }
        if (!flag){
            break;
        }
    }
    return theArray;
}