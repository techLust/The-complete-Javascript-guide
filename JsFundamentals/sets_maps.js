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



//Set elements are always unique
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Rissoto',
    'Pizza',
    'Pasta',
    'Rissoto',
]);

console.log(orderSet)

console.log(new Set("Mahatab"))
//Checking length
console.log(orderSet.size);
//Checking element into set
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Fruit'))

//Adding element into the set.
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
//Delete element from set.
orderSet.delete('Rissoto');
//Clearing element 
// orderSet.clear();
console.log(orderSet)


//Looping through set element 
for (order of orderSet) console.log(order)

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'manager'];
const staffUnique = [new Set(staff)]

const staffUnique1 = [...new Set(staff)]
console.log(staffUnique)
console.log(staffUnique1)

console.log(new Set('Mahatab').size);

//*************Map*****************8 */
console.log(`**************Map experiment****************8`)

const rest = new Map();
rest.set('name', 'Classico Itelliano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));


rest
    .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],)
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.set('close')));

console.log(rest.has('Categories'));
rest.delete(2)
// rest.clear();
console.log(rest)
console.log(rest.size)

rest.set(document.querySelector('h2'), 'Heading');
console.log(rest)

console.log(`******************Maps Iteration*****************`);

const question = new Map([
    ['Question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'Try again']
]);

console.log(question);

console.log(Object.entries(hours));

const hoursMap = new Map(Object.entries(hours))
console.log(hoursMap);

//Iterating over map 
console.log(question.get('Question'))

for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
    // if (key >= 1 && key <= 3) console.log(question.get(true))
}

const answer = Number(prompt("Enter your answer"));

// answer >= 1 && answer <= 3 ? question.get(true) : question.get(false);
console.log(question.get(question.get('correct') === answer));

//Convert Map to array
console.log([...question]);