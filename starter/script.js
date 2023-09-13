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

// Prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}
daniel.calcAge();

// console.log(daniel.__proto__);
// console.log(daniel.__proto__ === Person.prototype);
// /*
// console.log(Person.prototype.isPrototypeOf(daniel));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// */
// Person.prototype.species = 'Homo Sapiens';
/*
console.log(daniel.species, matilda.species);

console.log(daniel.hasOwnProperty('firstName'));
console.log(daniel.hasOwnProperty('species'));

console.log(daniel.__proto__);
console.log(daniel.__proto__.__proto__);
console.log(daniel.__proto__.__proto__.__proto__);
*/

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);

// Coding Challenge
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedez', 95)

car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();

car2.accelerate();
car2.accelerate();
car2.brake();
car2.accelerate();