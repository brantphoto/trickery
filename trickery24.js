function foo() {
  return g;
  function g() { }
}

console.log(foo());
