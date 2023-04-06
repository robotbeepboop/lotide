const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

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
