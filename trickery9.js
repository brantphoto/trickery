'use strict'

var x = 5;

with (obj) {
    x
}

/* -with- will not work in strict mode.
   This is a feature of strict mode that prevents code that is unable to be optimized by the compiler.
   This is due to confusion over whether x is globally defined x or obj.x
*/
