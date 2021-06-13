//************FOR LOOP ******************** */
for (let rep = 1; rep <= 5; rep += 1) {
    console.log(`Repetation number ${rep}`);
}

//Looping through arrays.
console.log(`******Loop through array*****`)
const mahatab = [
    'Mahatab',
    'Hossain',
    2021 - 1997,
    'Web Developer',
    ['Romio', 'Samirul', 'Tausif'],
    true
];

//To be filled array
const cloneMahatabs = [];
//************FOR LOOP ******************** */
for (let rep = 1; rep <= 5; rep += 1) {
    console.log(`Repetation number ${rep}`);
}

//Looping through arrays.
console.log(`******Loop through array*****`)
const mahatabs = [
    'Mahatab',
    'Hossain',
    2021 - 1997,
    'Web Developer',
    ['Romio', 'Samirul', 'Tausif'],
    true
];

//To be filled array
const cloneMahatab = [];

for (let i = 0; i < mahatabs.length; i++) {
    //Reading an array.
    console.log(mahatabs[i]);

    //Filling another array by using current array
    // cloneMahatab[i] = typeof mahatab[i];

    //Another way to push array element
    cloneMahatab.push(typeof mahatabs[i]);
}

console.log(cloneMahatab)

//Calculating age and store real age to another array
const yearss = [1997, 1992, 1998, 2003];
const ages = [];

for (let i = 0; i < yearss.length; i++) {
    ages.push(2021 - yearss[i]);
}
console.log(ages);


//continue and break statement
//printing only string 

console.log(`***Continue statement*******`);

for (let i = 0; i < mahatab.length; i++) {
    if (typeof mahatab[i] !== 'string') continue;
    console.log(mahatab[i], typeof (mahatab[i]));
}


console.log(`*****Break statement******`);
//Exit loop while iterate through number.
for (let i = 0; i < mahatab.length; i++) {
    if (typeof mahatab[i] === 'number') break;
    console.log(mahatab[i], typeof (mahatab[i]));
}


//Backward printing of an array
console.log(`*********Backward Printing************`)
for (let i = mahatab.length - 1; i >= 0; i--) {
    console.log(mahatab[i]);
}
for (let i = 0; i < mahatab.length; i++) {
    //Reading an array.
    console.log(mahatab[i]);

    //Filling another array by using current array
    // cloneMahatab[i] = typeof mahatab[i];

    //Another way to push array element
    cloneMahatab.push(typeof mahatab[i]);
}

console.log(cloneMahatab)

//Calculating age and store real age to another array
const years = [1997, 1992, 1998, 2003];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(2021 - years[i]);
}
console.log(age);


//continue and break statement
//printing only string 

console.log(`***Continue statement*******`);

for (let i = 0; i < mahatab.length; i++) {
    if (typeof mahatab[i] !== 'string') continue;
    console.log(mahatab[i], typeof (mahatab[i]));
}


console.log(`*****Break statement******`);
//Exit loop while iterate through number.
for (let i = 0; i < mahatab.length; i++) {
    if (typeof mahatab[i] === 'number') break;
    console.log(mahatab[i], typeof (mahatab[i]));
}


//Backward printing of an array
console.log(`*********Backward Printing************`)
for (let i = mahatab.length - 1; i >= 0; i--) {
    console.log(mahatab[i]);
}

//While loop experiment
console.log(`*********While loop ************`)
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetation ${rep}`)
    rep += 1;
}


//Generating random number
console.log(`********Generating random number*******`)
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    //One line if statement
    if (dice === 6) console.log('Your loop is about to end.....');
}

//Coding challange 
console.log(`**********Final coding challange**************`);
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52], tips = [], total = [];

const calcTip = (billValue) => billValue >= 50 && billValue <= 300 ? billValue * 15 / 100 : billValue * 20 / 100;

const calcAverage = (arr) => {
    let add = 0, avg = 0;
    for (i = 0; i < arr.length; i++) {
        add += arr[i];
        avg = add / arr.length;
    }
    return avg;
}

for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}
console.log(`Bills Value: ${bills}
Tips: ${tips}
Total ${total}
Average ${calcAverage(total)}`);



