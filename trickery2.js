
function curryIt(arg1) {
    function curriedFunction(arg1, arg2) {
        console.log(arg1 + arg2);
    }

    return curriedFunction.bind(null, arg1);
}

curryIt(1)(2);

const curriedPlusOne = curryIt(1)
curriedPlusOne(2);

// should console log the number 3 two times
