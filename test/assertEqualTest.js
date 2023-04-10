const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for Bootcamp", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), true);
  });
  it("returns true for 1, 1", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
});