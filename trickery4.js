// this example is not in strict mode on purpose
// overwrite undefined variable in global scope
var undefined = 5

// due to non-strict mode, global variables are able to be created in function scope
function scopeWrecker() {
    undefined = 1000;
}

function notDefined() {
   console.log('notDefined:', a);
   var a = 10;
}

function notDefined2() {
   var b;
   console.log('notDefined2:', b);
}

function polluted() {
   var c = undefined;
   console.log('probably5:', c);
}


scopeWrecker(); // yikes, overwrites global undefined variable
notDefined(); // undefined
notDefined2();// undefined
polluted(); // 1000
console.log('global undefined value:', undefined); // 1000
