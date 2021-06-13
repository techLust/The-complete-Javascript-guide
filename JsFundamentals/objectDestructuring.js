const restaurant = {
    names: 'Classico Iteliano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic bread', 'Caprese salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be delivered to ${address}, at ${time}`);
    },
};


//ordelivery function in practical
restaurant.orderDelivery({
    time: '22:30',
    address: 'Balarampur',
    mainIndex: 2,
    starterIndex: 2,
})

const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

//Destructuring object with new variable name.
console.log("********mutateObh****After destructure***********")
const { names: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//Ways to access data from API(Default values)
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating values
let a = 111;
let b = 999;

//Switching object value using destructuring.
const mutateObj = { a: 23, b: 7, c: 11 };
({ a, b } = mutateObj);
console.log(a, b);

//Accessing nested  object using destructuring
console.log("*************Nested object accessing**********")
const { fri } = openingHours;
console.log(fri);

//other way
const {
    fri: { open, close } } = openingHours;
console.log(open, close);

//other way
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);