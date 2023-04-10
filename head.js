const assertEqual = require('./assertEqual');

const head = function(actual) {
  let headElement = actual[0];
  if (actual.length = 0) {
    return "Undefined"
  }
  return headElement;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
