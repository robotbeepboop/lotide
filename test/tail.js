const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns true for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), 5);
  });
  it("returns 'Hello' for 'Hello', 'Lighthouse', 'Labs'", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
});