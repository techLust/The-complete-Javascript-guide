'use strict'

const restaurant = {
    name: 'Classico Iteliano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic bread', 'Caprese salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

//Destructuring array(Switching array element without using 'temp' variable)
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Using destructuring operator(,) to select next array elemetn.
//while this operator occured it skips that element.
let [main1, , secondary1] = restaurant.categories;
console.log(main1, secondary1);

//Switching elements
// const temp = main;
// main = secondary;
// secondary = temp;

//Switching in destructuring way
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Fetching element from starterMenu and mainMenu using method
console.log(restaurant.order(2, 0));

//Fetching element using destructuring
const [startItem, mainItem] = restaurant.order(2, 0);
console.log(startItem, mainItem);

//Fetching nested array using destructuring 
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

//Another way 
const nested1 = [2, 4, [5, 6]];
const [i1, , [j1, k1]] = nested1;
console.log(i1, j1, k1);

//Default value(Third element become 1)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
