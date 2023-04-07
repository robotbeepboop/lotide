const assertEqual = require('./assertEqual');

//takes in a value and an object
const findKeyByValue = function(obj, val) {
  for (var key of Object.keys(obj)) {
    if(obj[key] === val) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
