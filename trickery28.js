'use strict';
// Crawford Prototypal Example

const myMammal = {
    name: 'Henry',
    getName: function() {
        return this.name;
    },
    says: function() {
        return this.saying || '';
    }
}

const myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.greeting = function() {
    return 'Hi my name is' + this.name;
}

console.log(myCat.greeting())
console.log(myCat.name)



