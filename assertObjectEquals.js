const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual) } === ${inspect(expected) }`))
  }
  return (console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`))
};
