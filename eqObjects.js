const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !==  ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  let output = false;

  if (obj1Keys.length === obj2Keys.length) {
    for (key in obj1Keys) { //check if the second array contains the key
      if (obj2Keys.includes(key) && object1[key] == object2[key]) { //checks if key values are the same
        output = true;
      } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          output = true;
        } else {
          output = false;
        }
      } else {
        output = false;
      }
    }
  } else {
    return undefined
  }
};
