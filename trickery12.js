var y = 10;

function strict2(f, str) {
  'use strict';
  var placeHolder = f(str);
  console.log(1, y);
  return placeHolder;
}

strict2(eval, "'use strict'; var y; delete y;");
console.log(2, y); // will throw as the contents being evaluated violate strict rules, specifically deleting a plain name such as -y-
