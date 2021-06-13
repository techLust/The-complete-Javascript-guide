const airIndia = {
    airline: 'Air India',
    airCode: 'IND',
    bookings: [],
    // book: function () { },
    book(flightNum, names) {
        console.log(`${names} booked a seat on ${this.airline} flight ${this.airCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.airCode}${flightNum}`, names });
    },
};

airIndia.book(537, 'Mahatab Hossain');
airIndia.book(297, 'Romio Islam')

//Creating another object 

const indiGo = {
    airline: 'IndiGo',
    airCode: 'IG',
    bookings: [],
};

const book = airIndia.book;
//Object have method and therefore functons can have mehtod too.
//Call method
book.call(indiGo, 23, 'Samirul Islam');
console.log(indiGo);

//Creating one more object
const airSwis = {
    airline: 'Swis',
    airCode: 'SW',
    bookings: [],
}

book.call(airSwis, 265, "Awal Sk");

const flightData = [583, 'MD Tausif'];
//apply method()
book.apply(airSwis, flightData);

//Using call and rest parameter instead apply()

book.call(airSwis, ...flightData);

//*********Bind method() allows us to manually set this keyward. */

const bookIG = book.bind(indiGo);
const bookSw = book.bind(airSwis);
const bookAi = book.bind(airIndia);

bookIG(23, 'Romio ali') // call more in the same way 

//Bind with eventListener

airIndia.planes = 200;
airIndia.buyPlane = function () {

    //In an event handler functin this keyward always points to the elements.
    console.log(this);

    this.planes++
    console.log(this.planes);
}

// document.body.append(document.createElement('button'));
// const buttons = document.querySelector('button');
// buttons.textContent = 'Buy Plane';

const buttons = document.querySelector('.buy-plane');

buttons.addEventListener('click', airIndia.buyPlane.bind(airIndia));


//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
console.log(addVat(100));
console.log(addVat(23));

//Using return function.

const addsTax = function (rate) {
    return function (value) {
        return value + value * rate;
    }
};

const addTaxResult = addsTax(.25);
console.log(addTaxResult(100));


//*******************Coding challange******************** */
console.log(`**************Coding challange*********************`)

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: javaScript', '1:Python', '2:Rust', '3: C++'],
    answers: new Array(4).fill(0),
    // registerNewNumber() {
    //     const input = Number(prompt(`What is your favoite programming language?.
    //     0: javaScript
    //     1: Python
    //     2: Rust
    //     3: C++
    //     (Write your option)`))
    // },

    registerNewNumber() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write opetion number)`));
        console.log(answer);
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        // console.log(this.answers)
        this.displayResult();
        this.displayResult('string');
    },


    displayResult(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    },
};


const button2 = document.querySelector('.answer-poll');
// button2.addEventListener('click', function () {
//     poll.registerNewNumber();
// })
button2.addEventListener('click', poll.registerNewNumber.bind(poll));

// if (poll.registerNewNumber.input === 'number') {
//     if (input >= 0 && input <= 4) {

//     }
// }


//input manual array using call()
poll.displayResult.call({ answers: [5, 2, 3] }, 'string')

