// this example is not in strict mode on purpose
var name = 'Ken';
function goodOne() {
    console.log('good luck' + name);
}

function badOne() {
    name = null;
}

badOne();
goodOne();
// the function badOne overwrote the global variable name
