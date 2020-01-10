'use strict'

// this function will throw due to duplicate variable names for params
function atLeastWeCaughtIt(a, a, c) {
    return a + c;
}

console.log(wellThatWentPoorly(10, 100, 1000)); // 1100
