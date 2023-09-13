'use strict';


// const Person = function (firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// const daniel = new Person('Daniel', 2000);
// console.log(daniel);

// 1.New { } is created
// 2.function is called, this = {}
// 3.{ } linked to prototype
// 4.function Automatically returns { }

// const matilda = new Person('matilda', 2017);
// const jack = new Person('jack', 2003);
// console.log(matilda, jack);

// console.log(daniel instanceof Person);

// Prototype
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }
// daniel.calcAge();

// console.log(daniel.__proto__);
// console.log(daniel.__proto__ === Person.prototype);
// /*
// console.log(Person.prototype.isPrototypeOf(daniel));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// */
// Person.prototype.species = 'Homo Sapiens';

// console.log(daniel.species, matilda.species);

// console.log(daniel.hasOwnProperty('firstName'));
// console.log(daniel.hasOwnProperty('species'));

// console.log(daniel.__proto__);
// console.log(daniel.__proto__.__proto__);
// console.log(daniel.__proto__.__proto__.__proto__);


// console.dir(Person.prototype.constructor);

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

// Coding Challenge 1
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// }
// Car.prototype.brake = function () {
//     this.speed -= 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedez', 95);

/*
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();

car2.accelerate();
car2.accelerate();
car2.brake();
car2.accelerate();
*/
// Class expression
// const PersonCl = class { }

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName} `);
    }

    get age() {
        return 2037 - this.birthYear;
    }
    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`this ${name} does not exist`);
    }
    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there👋');
        console.log(this);
    }

}

const jessica = new PersonCl('jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

jessica.greet();

PersonCl.hey();
console.log(jessica.__proto__ === PersonCl.prototype);

const account = {
    owner: 'Daniel',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Coding challenge 2
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// }
// Car.prototype.brake = function () {
//     this.speed -= 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedez', 95);

/*
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }
    brake() {
        this.speed -= 10;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        return this.speed = speed * 1.6;
    }
}

const ford = new Car('Ford', 120);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
*/

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}



const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'Information Technology');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


// Coding Challenge 1
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
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.chargeTo = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed}km/hr, with a charge of ${this.charge}`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();