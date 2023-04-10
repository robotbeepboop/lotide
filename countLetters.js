const assertEqual = require('./assertEqual'); 

const countLetters = function(words) {
  const letters = { };
  for (var letter of words) {
    if (letters[letter]) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters
}

console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;
