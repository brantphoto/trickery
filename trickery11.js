var y = 10;

function strict2(f, str) {
  'use strict';
  var placeHolder = f(str);
  console.log(1, y);
  return placeHolder;
}

strict2(eval, 'var y; delete y;');
console.log(2, y); // will not throw due though it violates strict mode
