// this example is not in strict mode on purpose

var shouldBe5 = 5;

var scopeWrecker = eval('var shouldBe5 = 10; shouldBe5;'); // pollutes global scope, returns 10

console.log(scopeWrecker); // 10
console.log(shouldBe5); // 10
