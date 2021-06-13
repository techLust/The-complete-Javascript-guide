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

console.log(restaurant)

//For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const items of menu) console.log(items);

//Accessing index from an array
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const items of menu1.entries()) console.log(items);

//usual declaration
if (restaurant.hours && restaurant.hours.mon) console.log(restaurant.hours.mon.open)

//Using opetional chaining operator(?.) with noulish operator(??).
//It simply checks if value of the right exist.
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.hours[day]?.open ?? 'Closed';
    console.log(`On ${day}, we open at ${open}`);
}


//Using with method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

//Using with arrays
const mahatab = [{ name: 'Mahatab', email: 'mahatab@gmail.com' }];
console.log(mahatab[0]?.name ?? 'User does not exist')