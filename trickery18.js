'use strict';

let firstNum = 3;

let secondNum = new Number(3);

let alternativeSecondNum = Number(3);
let anotherSecondNum = Number("3");


console.log('Number compare: double equals', firstNum == secondNum); // true
console.log('Number compare: tripple equals', firstNum === secondNum); // false, would expect this to be true

console.log('Number compare, no new keywork: tripple equals', firstNum === alternativeSecondNum); // true
console.log('Number compare, string in Number function: tripple equals', firstNum === anotherSecondNum); // true, as string value is coerced before comparison
