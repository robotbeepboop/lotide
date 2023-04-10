const tail = function(arr) {
  arrTail = arr.slice(1);
}

const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !==  ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};
