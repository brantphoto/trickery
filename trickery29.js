// Crawford Psuedoclassical Pattern

const Cat = function(name) {
    this.name = name;
    this.saying = "purrrrrr";
}

const Mammal = function(name) {
    this.name = name;
}

Mammal.prototype.getName = function() {
    return this.name;
}

Cat.prototype = new Mammal();
Cat.prototype.purr = function() {
    return this.saying;
}

const cat = new Cat('Wally');

console.log(cat.name);
console.log(cat.purr());
console.log(cat.getName());
