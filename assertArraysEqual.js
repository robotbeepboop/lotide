const assertEqual = require('./assertEqual');

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

module.exports = assertArraysEqual;
