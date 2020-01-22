const assert = require('assert');
let firstName = "Bruce";

const x = {
    firstName: "",
    addName() {
        this.firstName = "Ava";
    }
}


function Y() {
    this.firstName = "";
}

Y.prototype.addName = function() {
    this.firstName = "Yean";
}



// TEST 1, side effect: changes global name variable
const namer = x.addName;
namer();

assert.strictEqual(x.firstName, "");
assert.strictEqual(global.firstName, "Ava");

const y = new Y();


const namer2 = y.addName;
namer2();

assert.strictEqual(y.firstName, "");
assert.strictEqual(global.firstName, "Yean");

y.addName();

assert.strictEqual(y.firstName, "Yean");
// NO CHANGE HERE
assert.strictEqual(global.firstName, "Yean");
