const eqArrays = function(arr1, arr2) {
  //check if arrays are identical, empty, or of different lengths
  if (arr1 === arr2) {
    return true;
  } else if (arr1 == null || arr2 == null) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  //check if arrays are identical, empty, or of different lengths
  if (arr1 === arr2) {
    console.log(true);
  } else if (arr1 == null || arr2 == null) {
    console.log(false);
  } else if (arr1.length !== arr2.length) {
    console.log(false);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(false);
      } else {
        console.log(true);
      }
    }
  }
  
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    //returns two middle elements
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    //return singular middle element
    return [array[Math.floor(array.length / 2)]];
  }
};
