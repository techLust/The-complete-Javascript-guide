'use strict';
console.log(`---------------FUNCTIONAL PROGRAMMING------------------------`);
//******************* FUNCTIONAL PROGRAMMING ****************** */

// Constractor() function always starts with capital letter. Only difference from regular function is
// that it use "new" keyword to create objects.

// Arrow function does not work as a constructor function cause it does not have "this" keyword.

//Create "Person" constructor 
const Person = function (firstName, birthYear) {
    //set instance property 
    this.firstName = firstName;  // (constructor parameter).
    this.birthYear = birthYear;  //(constructor parameter).

    //Never do this way.
    // this.calcAge = function () {
    //     console.log(2021 - 1997);
    // }
}

//What "new keyword do":
//1. Create and empty {}.
//2. Funtion is called this = {}.
//3. {} linked to prototype.
//4. Function autometically return. 


//We can create as many object as we want based on the "Person" constructor.
//It is a blueprint of an object. Object created from blueprint is called "instance"
const mahatab = new Person('Mahatab', 1997);
console.log(mahatab);

const romio = new Person('Romio', 1996);
console.log(romio);

const samirul = 'Samirul';
//Checking blueprint of an instance
console.log(mahatab instanceof Person) //true
console.log(samirul instanceof Person) //false


//*************************PROTOTYPES******************************** */

console.log(Person.prototype);

//Create method outside instead of inside of a constructor.
Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};

mahatab.calcAge();
romio.calcAge();

//Check blueprint prototype
console.log(mahatab.__proto__);
//Check instance and blueprint prototype
console.log(mahatab.__proto__ === Person.prototype);

//Check whether a instance is a prototype of a certain blueprint.
console.log(Person.prototype.isPrototypeOf(mahatab));
console.log(Person.prototype.isPrototypeOf(samirul));

//Prototype of linked object 
Person.prototype.species = 'Homo sapiens';
console.log(mahatab.species, romio.species);

//check whether it has own property
console.log(mahatab.hasOwnProperty('firstName'));
console.log(romio.hasOwnProperty('species'));

//**********************PROTOTYPAL INHERITANCE ****************************** */

console.log(mahatab.__proto__.__proto__);
console.dir(Person.prototype.constructor);

//new array
const arr = [2, 3, 5, 1, 9, 8, 1, 3, 0];
console.log(arr.__proto__);

//add new method to this array 
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h2 = document.querySelector('h2');
console.log(h2);



//**************CLASS PROGRAMMING and ENCAPSULATIN(DATA BINDING) EXPERIMENT ********************* */

console.log(`------------------- CLASS PROGRAMMING EXPERIMENT -------------------`);

// 1) Public field
// 2) Private field

// 3) Public method 
// 4) Private method

// (There are also a static version)


class Account {

    // 1) Public fields or instances(it will be available all the instances that is created through this class
    //These are also referenceble by this keyword.
    locale = navigator.language;

    // 2) Private fields are not accessable from outer class.(# means protected). We can't access it outside
    // of this class. 
    #movements = [];
    #pin = this.pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        //protected propery(underscore means protected)
        // this._pin = pin;

        // We can use any code into the constructor.

        // this._movements = [];

        // navigator object contains information about browser.

        // this.locale = navigator.language;
        console.log(`Thanks for opening accoutnt ${owner}`);
    };

    // 3) Public method OR Public interface of object.

    getMovements() {
        return this.#movements;
    };

    deposit(val) {
        this.#movements.push(val)
        return this;
    };

    //method inside method
    withdrawal(val) {
        this.deposit(-val);
        return this;
    };

    //protected method
    _approveLoan(val) {
        return true;
    };

    requestLoan(val) { // replace _  to # to make it private.
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved.');
            // return makes method chainable.
            return this;
        };
    };

    // 4) Private method(Hide the implementation details outside).
    // #approveLoan(val) {
    //     return true;
    // };

    //Static method 
    static helper() {
        console.log('Static method is used as a helper method. ')
    }
};

const account1 = new Account('Mahatab', 'INR', 2222);

console.log(account1);
//instead of doing this create method inside constructor
// account1.movements.push(450);
// account1.movements.push(-760);

account1.deposit(690);
account1.withdrawal(760);
account1.requestLoan(100);
// account1.helper();
console.log(account1.getMovements());

//Private field not accessible. e.x - 

// console.log(account1.#pin);
// console.log(account1.#movements)


//************** CHAINING ************************** */
account1.deposit(400).deposit(790).withdrawal(968).requestLoan(9678).withdrawal(690);
console.log(account1.getMovements());

console.log(`__________________________________________________________________________`);