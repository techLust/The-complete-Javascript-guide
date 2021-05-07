'use strict'

//Working with default parameter 
const book = [];

//ES6 default parameter initializing within parenthesis.
const createBooking = function (flightNo, numOfPassenger = 1, price = 199 * numOfPassenger) {

    //Default parameter assignment in  ES5
    // numOfPassenger = numOfPassenger || 1;
    // price = price || 199;

    const booking = {
        flightNo,
        numOfPassenger,
        price
    }
    console.log(booking)
    book.push(booking);
}

createBooking('GE027');

//We can override default value 
createBooking('LH003', 2, 900);
createBooking('B77G0', 5);


//Passing argument value vs reference

const flight = 'LH234';

const mahatab = {
    name: 'Mahatab Hossain',
    passport: 23785946,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH299';
    passenger.name = 'Mr.' + passenger.name;

    // if (passenger.passport === 23785946) {
    //     alert('Checked in');
    // } else {
    //     alert('Wrong passport');
    // }
};

// checkIn(flight, mahatab);

// console.log(flight);
// console.log(mahatab);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(mahatab);
checkIn(flight, mahatab);

//Marging words into single word by removing space.
const oneWard = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

console.log(oneWard('Maha tab'));



const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

console.log(upperFirstWord('Mahatab is a good web developer.'))

//********Higher-order function */ also abstract function, because transformer() does'nt know how
//strings are transformed. it simply pass the upperFirstWord() as a function argument.
const transformer = function (str, fn) {
    console.log(`Original string:  ${str}`);
    console.log(`Transformed string:  ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('javaSript is the best', upperFirstWord);


//Using function with dom.
const greetings = function () {
    console.log("👍");
};

document.body.addEventListener('click', greetings);


//Creating a funciton that returns function.
const greet = function (greets) {
    return function (name) {
        console.log(`${greets} ${name}`)
    };
};


const heygreet = greet('Hey');
heygreet('Mahatab');

greet('Hello')('Developers');

//Using arrow function
const greets = greeting => names => console.log(`${greeting} ${names}`);
greets('Hi')('Friends');