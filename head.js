const assertEqual = require('./assertEqual');

const head = function(actual) {
  let headElement = actual[0];
  if (actual.length = 0) {
    return "Undefined"
  }
  return headElement;
}

module.exports = head;
