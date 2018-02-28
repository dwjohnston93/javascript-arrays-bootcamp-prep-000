
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray; 
}

function destructivelyAddElementToBeginningOfArray(array,element){
 arr.unshift(element);
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
}

function accessElementInArray (array, index) {
  array[index];
}

function destructivelyRemoveElementToBeginningOfArray(array){
  array.shift()
}

function removeElementToBeginningOfArray(array){
  array.slice(1);
}

function destructivelyRemoveElementToEndOfArray(array){
  array.pop(); 
}

function removeElementFromEndOfArray(arr){
  array.slice(array.length-1);
}