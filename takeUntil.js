const takeUntil = function(array, callback) {
  // ...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) { //if it returns a truthy value, the loop breaks
      array.splice(i); //splice it so that only the values that are falsy get returned
      return array;
    }
  }
  return false;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//ASSERT ARRAYS EQUAL AND EQUAL ARRAYS FUNCTIONS

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

const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !==  ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
