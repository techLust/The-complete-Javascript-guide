//Object literals with templete literals
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//accessing outside's object into an object by using object literals.
hours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [`day-${2 + 4}`]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    names: 'Classico Iteliano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic bread', 'Caprese salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    hours,

    //not using function keyword.
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex, mainIndex, address, time }) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be delivered to ${address}, at ${time}`);
    },
};


//Accessing property NAMES i.e KEYS
const properties = Object.keys(hours);
console.log(properties)

let openStr = `We are open on ${properties.length} days: `;
console.log(openStr)
//Looping through keys
for (const day of properties) {
    openStr += `${day},`;
}
console.log(openStr)

//Accessing object VALUES
const propertiesValues = Object.values(hours);
console.log(propertiesValues)

//Looping through the entire object
const entries = Object.entries(hours);
console.log(entries);

//Looping through keys and values of an object
for (const [key, { open, close }] of entries) console.log(`On ${key} we open at ${open}
and close at ${close}`);


//Coding challange
console.log(`--------Coding chalange-------------`);