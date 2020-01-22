// STRANGE BUT TRUE, STRICT IN A SENSE
const unstricter1 = function () {
    if (true) {
        function h() {
            return true
        }
    }
  return h();
}

console.log(unstricter1())

const unstricter2 = function() {
    if (false) {
        function h() {
            return true
        }
  }
  return h();
}

try {
    console.log(unstricter2())
}
catch (e) {
    console.log(e.message)
}

const unstricter3 = function() {
    return h();

    if (true) {
        function h() {
            return true
        }
    }
}

try {
    console.log(unstricter3())
}
catch (e) {
    console.log(e.message)
}


// in strict mode
const stricter1 = function () {
    'use strict';
    if (true) {
        console.log(h);
        function h() {
            return true
        }
    }
  return h();
}

try {
    console.log(stricter1())
}
catch(e) {
    console.log(e.messege);
}
