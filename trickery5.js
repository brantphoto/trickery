// this example is not in strict mode on purpose


// the first arg will be overwriten as the 2nd duplicate variable name
function wellThatWentPoorly(a, a, c) {
    return a + c;
}

console.log(wellThatWentPoorly(10, 100, 1000)); // 1100
