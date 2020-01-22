'use strict'
function foo() {
  return g;
  function g() { }
}

if (true) {
    function h () {
    }
}

console.log(foo());
console.log(h());


