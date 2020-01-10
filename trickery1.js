"use strict"

function a() {
    function b() {
        console.log('Hello');
    }
}

a();
/// b will error out because it is not declared in the global scope
b();
