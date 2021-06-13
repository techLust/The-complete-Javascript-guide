
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

//1) Destructuring

//SPREAD operator always placed on right side of equal to (=)
const arr = [1, 2, ...[3, 4]];

//REST operator always placed on the left side of equal to (=)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Real exmaple. It besically collect rest of the array.Here otherFood is the REST element.
const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//REST with object 
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions. We can pass as many as we want as a parameter into function using REST parameter.
const add = function (...numbers) {

    console.log(numbers);
}

add(1, 2, 3, 4, 5);
add(2, 4, 6);
add(9, 8);

//Addition
const add1 = function (...numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum)
}

add1(1, 2, 3, 4, 5);
add1(2, 4, 6);
add1(9, 8);

//adding using SPREAD operator.
const x = [23, 5, 7]
add1(...x);
add(...x);
//Order pizza function
restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('Mahsrooms');