'use strict';

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const daniel = new Person('Daniel', 2000);
console.log(daniel);

// 1.New { } is created
// 2.function is called, this = {}
// 3.{ } linked to prototype
// 4.function Automatically returns { }

const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 2003);
console.log(matilda, jack);

console.log(daniel instanceof Person);