'use strict';

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayGreeting = function() {
    return 'hello this is ' + this.firstName + this.lastName;
}

// object creation style 1
let person1 = new Person('Normal', 'Ackerman');

console.log(person1.sayGreeting());

// object creation style 2
let person2 = Object.create(Person.prototype);
person2.firstName = 'Normal';
person2.lastName = 'Ackerman';

console.log(person2.sayGreeting());

// object creation style 3 with factory pattern
function personFactory(firstName, secondName) {
    let person = Object.create(Person.prototype);
    person.firstName = 'Normal';
    person.lastName = 'Ackerman';
    return person;
}

let person3 = personFactory('Normal', 'Ackerman');
console.log(person3.sayGreeting());

// all console.logs should return the same greeting
