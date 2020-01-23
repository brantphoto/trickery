'use strict'
const assert = require('assert');
// Crawford implimentation of private variables
const secretData = {
    answer: 'blue',
}
const construct = function (spec) {
    let that = {
        getAnswer: function() {
            console.log(spec);
            return spec.answer;
        }
    }

    return that;
}

const obj = construct(secretData);

assert.strictEqual(obj.answer, undefined);
assert.strictEqual(obj.getAnswer(), 'blue');
