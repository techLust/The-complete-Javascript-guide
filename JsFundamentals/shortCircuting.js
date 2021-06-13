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

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};



// 0, null, undefined are falsy values.

console.log('------------OR--------------')
// OR(||) Circuit operator returns immediate truthy value.
//OR(||) operator returns true if atleast one operand is true.
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

//practical example using ternary operator.
restaurant.numOfGuest = 23;
const guest1 = restaurant.numOfGuest ? restaurant.numOfGuest : 10;
console.log(guest1);

//practical example using short-curcit operator.
const guest2 = restaurant.numOfGuest || 10;
console.log(guest2);


console.log('-----------------AND---------------------')

//AND(&&)  Circuit operator returns immediate falsy value.
//AND(&&) operator returns false if atleast one operand is false.

console.log(0 && 'mahatab');
console.log(7 && 'mahatab');
console.log('hello' && 23 && null && 'mahatab');

//practical example
if (restaurant.orderPizza) restaurant.orderPizza('mashroom', 'spinach')

//it works as a if statement
restaurant.orderPizza && restaurant.orderPizza('mashroom', 'spanich');