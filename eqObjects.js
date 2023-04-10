const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
