
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
  
}

function removeElementToBeginningOfArray(arr){
  
}

function destructivelyRemoveElementToEndOfArray(arr){
  
}

function removeElementFromEndOfArray(arr){
  
}