const eqArrays = require('./eqArrays.js');

const assertArraysEqual = require('./assertArraysEqual.js');

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

module.exports = middle;
