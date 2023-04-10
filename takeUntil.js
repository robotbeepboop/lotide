const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

const takeUntil = function(array, callback) {
  // ...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) { //if it returns a truthy value
      array.splice(i); //splice it so that only the values that are falsy get returned
      return array;
    }
  }
  return false;
}

module.exports = takeUntil;
