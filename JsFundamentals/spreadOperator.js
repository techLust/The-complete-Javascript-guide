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

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delecious pasta with ${ing1}, ${ing2}, and ${ing3}`)
    }
};



//copy array using spread operator(...)
const arr = [1, 3, 5];
console.log(arr);
//Suppose we want to add some element in abobe array.
const newArr = [2, 5, 9, ...arr];
console.log(newArr);
console.log(...newArr);  // Only print individual element

//Adding an element to the main menu 
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy main menu array 
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Margin mainMenu and starterMenu 
const margeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(margeMenu);

//Iterables: arrays, strings, maps, sets,  Object.
const str = 'jonas';
const letters = [...str, ' ', 's'];
console.log(letters)

//Creating prompt array with real world example
const ingredients = [
    // prompt('Let\'s make pasta ingredients 1?'),
    // prompt('Ingredient 2?'),
    // prompt('ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//spread operator with object 
const newRestaurant = {
    founderIn: 1998,
    ...restaurant,
    founder: 'Mahatab',
}

console.log(newRestaurant);