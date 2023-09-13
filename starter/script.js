'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const daniel = new Person('Daniel', 2000);
console.log(daniel);

// 1.New { } is created
// 2.function is called, this = {}
// 3.{ } linked to prototype
// 4.function Automatically returns { }