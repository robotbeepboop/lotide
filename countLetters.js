const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !==  ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};

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
