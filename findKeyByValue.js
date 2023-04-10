const assertEqual = require('./assertEqual');

//takes in a value and an object
const findKeyByValue = function(obj, val) {
  for (var key of Object.keys(obj)) {
    if(obj[key] === val) {
      return key;
    }
  }
}

module.exports = findKeyByValue;
