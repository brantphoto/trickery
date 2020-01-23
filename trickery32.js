'use strict'
// this works
// Crawford Psuedoclassical Pattern

// PERSON
const Person = function(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

Person.prototype.getBio = function() {
    const yearOrYears = this.age > 1 ? 'years' : 'year';

    return `${this.name} is ${this.age} ${yearOrYears} old and lives in ${this.location}.`
}

// TEACHER
const Teacher = function(subject, school, ...personProps) {
    Person.apply(this, personProps)
    this.subject = subject;
    this.school = school;
}


Teacher.prototype = new Person();

Teacher.prototype.getTeacherBio = function() {
    console.log(this.getBio);
    return `${this.getBio()} They teach ${this.subject} at ${this.school}.`;
}

// IN ACTION

const teacher = new Teacher('English', 'Henry Morris Elementary', 'Johhny Douglas', 25, 'Silverlake, IN');

console.log(teacher.getTeacherBio());
