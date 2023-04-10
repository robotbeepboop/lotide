const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

let source = [];
let itemsToRemove = [];
const without = function(source, itemsToRemove) {
  //check itemstoremove against source and remove the items that overlap in the source array
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1); //splice the array to remove the value
      }
    }
  }
  return source;
}

module.exports = without;
