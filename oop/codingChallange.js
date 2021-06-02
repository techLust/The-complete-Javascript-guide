//******************Coding challage 01 ***************************

//Constructor function(Blueprint)
const Car = function (make, speed) {
    this.company = make;
    this.currentSpeed = speed;
}

// Adding method into Car class and it is a parent class which will be overwritten by child class.
//In terms of experimenting polimorphism. 
Car.prototype.accelerate = function () {
    this.currentSpeed += 10;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
};

Car.prototype.brake = function () {
    this.currentSpeed -= 5;
    console.log(`${this.company} is going at ${this.currentSpeed} km/h`);
}

//Creating Object of Car class.
const newCar = new Car('BMW', 120);
console.log(newCar);

const newCar2 = new Car('Mercedes', 95)
console.log(newCar2);

// Calling method.
newCar.accelerate();
newCar.brake();

newCar2.accelerate();
newCar2.brake();

//************************** coding challange 02 ****************** */

console.log(`--------- coding challange 02 ------------`)
class Ford {
    constructor(speed) {
        this.speedUS = speed;
    }

    get speedUs() {
        console.log(this.speedUS / 1.6);
    }

    set speedUS(speed) {
        console.log(speed * 1.6);
    }
};

const newFord = new Ford(120);


//************ coding challange 03 ********************* */
console.log(`------------------coding challange 03-----------------`);

//Constructor function(Blueprint)
const EV = function (make, speed, charge) {
    //EV inherit the Car method property(Inheritance)
    Car.call(this, make, speed);
    this.charge = charge;
};

//Link the prototypes. Inherit prototype property Car into EV.
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

// this method overwrite parent method of Car class.(polymorphism).
EV.prototype.accelerate = function () {
    this.currentSpeed += 20;
    this.charge--;
    console.log(`${this.company} going at ${this.currentSpeed} km/h with a charge of ${this.charge}%`)
}

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

console.log(`---------------------------------------------`)


//******* challange 03 using ES6 classes ********************************* */
console.log(`*************************Final OOP coding challange**********************`);
// to implement ES6 class we only need "extends" keywords and "super" function.

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    };
    get speedUs() {
        console.log(this.speedUS / 1.6);
    };

    set speedUS(speed) {
        console.log(speed * 1.6);
    };

};

// Inheriting CarCl class 


class EVCl extends CarCl {

    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge

    };


    accelerate() {
        this.speed += 20;
        this.#charge--;

        console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}`);
        return this;
    };

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    };
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().brake().accelerate().chargeBattery();

console.log(`__________________________________________________________________`)