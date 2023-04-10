const assertEqual = require('./assertEqual');
const findKey = (object, callback) => {
  for (let key in object) { //check each key for the value
    if (callback(object[key])) { //checks for truthy result
      return key;
    }
  }
}

/*findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)*/ // => "noma"

module.exports = findKey;
