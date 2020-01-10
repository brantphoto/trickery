
// this example is not in strict mode on purpose

function atLeastWeCaughtIt(a, c) {
    return a + c;
}

function someRandomFunction() {
    // the first arg will be overwriten as the 2nd duplicate variable name
    function wellThatWentPoorly(a, a, c) {
        'use strict'
        return a + c;
    }
}

console.log(atLeastWeCaughtIt(100, 1000)); // Errors out due to wellThatWentPoorly
