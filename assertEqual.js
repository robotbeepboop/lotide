//const sum = function(x, y) {
//  return x + y;
//}

//console.assert(sum(1, 8) === 3, "Womp womp");

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !==  ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;
