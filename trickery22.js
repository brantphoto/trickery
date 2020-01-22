'use strict';
const assert = require('assert');

function* g4(x) {
  yield* [x * 1, x * 2, x * 3];
  return x * 4;
}

var result;

function* g5() {
  const g4ReturnValue = yield* g4(6);
  return g4ReturnValue;
}

const iterator = g5();

const result1 = iterator.next().value
assert.strictEqual(result1, 6);
const result2 = iterator.next().value
assert.strictEqual(result2, 12);
const result3 = iterator.next().value
assert.strictEqual(result3, 18);
const result4 = iterator.next()
 assert.strictEqual(result4.done, true);
 assert.strictEqual(result4.value, 24);

