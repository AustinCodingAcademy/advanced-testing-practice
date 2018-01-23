
//Your boss has told you to build a function called map. Follow these instructions to do so.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//on the first line, create a new empty array and store in a variable named whatever you want (myNewArray)
//loop theArray and extract the single item from the array per loop and store it in a variable
//on each loop call fnc() passing in the item from the current loop into the call to fnc
//fnc is a function that must return something, capture whatever it returns in a variable
//add the returned value from fnc to the new array
//after looping, return the new array

export function map(theArray, fnc){
  let output=[];
  for(i=0;i<theArray.length;i++){
    output.push(fnc(theArray[i]));
  }
  return output;
}


//create a new array
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array

export function filter(theArray, fnc){
  let output=[];
  for (i=0;i<theArray.length;i++){
    if (fnc(theArray[i])==true){
      output.push(theArray[i]);
    }
  }
  return output;
}


//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true return the item
//return null

export function find(theArray, fnc){
  for (i=0;i<theArray.length;i++){
    if (fnc(theArray[i])==true){
      return theArray[i];
    }
  }
  return null;
}


//return the last item in theArray
export function findLast(theArray){
  let lastly = theArray.length-1;
  return theArray[lastly];
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
  let output=[];
  for(i=theArray.length;i>-1;i--){
    output.push(fnc(theArray[i]));
  }
  return output;
}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array

export function tail(theArray){
  theArray.splice(0,1);
  return theArray;
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
  let stillWorking = true;

  while (stillWorking==true){
    let swaps = 0;
    for (i=0;i<(theArray.length-1);i++){
      if(theArray[i]>theArray[i+1]){
        let tempVal=theArray[i];
        theArray[i]=theArray[i+1];
        theArray[i+1]=tempVal;
        swaps++;
      }

      if (swaps>0){
        stillWorking=true;
      }else {
        stillWorking=false;
      }

    }
  }
  return theArray;
}

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



console.log("should return the last element of an array 'Axe': "+findLast(names));

console.log("should return the first element of an array 'Jon': "+head(names));

console.log("should return the 7 names (everything after 'Jon'): "+tail(names));

console.log("Map (should append hello): "+map(names,addHello));

console.log("Numbers Raw: "+myNumbers+", Numbers sorted: "+sort(myNumbers));

//filter should return an array with names of length 3
//["Jon","Bob","Ted","Axe"]

//find should find one name of "Barney"

//findLast should find the last name of "Axe"

//reverse should return an array with the elements in the opposite order
//["Axe","Saul","Robin","Lilly","Barney","Ted","Bob","Jon"]
//tail should return all elements in an array except the first one
//[Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
