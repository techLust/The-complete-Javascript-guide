//*********Array*************** */
console.log(`****Array experiments*******`);

//definie array "[]"
const friends = ['Romio', 'Samirul', 'Awal'];

// Other way to define array
const years = new Array(1991, 1992, 1993, 1994, 1995, 1996);

//We can define arry within array

const firstName = 'Mahatab';
const lastName = 'Hossain';

const aboutMahatab = [firstName, lastName, 2021 - 1997, 'Web developer', friends];
console.log(aboutMahatab);


//Differentiating array using array
const calcAge = birthYear => 2021 - birthYear;

const years1 = [1997, 1996, 1994, 1991, 1992];

const ages = [calcAge(years1[0]), calcAge(years1[2]), calcAge(years1[years1.length - 1])];
console.log(`The ages of person is ${ages}`);

//Tip calculator 
const calcTip = bilValue => bilValue >= 50 && bilValue <= 300 ? bilValue * 15 / 100 : bilValue * 20 / 100;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];
console.log(`Bill value is ${bills}
Tips value is ${tips}
Total value is ${total}`);

//************ OBJECT ***************** */
console.log(`********Object experiments**********`);

//Object definition "{}"
const mahatab = {
    firstName: 'Mahatab',
    lastName: 'Hossain',
    age: 2021 - 1997,
    job: 'software engineer',
    friends: ['Romio', 'Tausif', 'Samirul', 'Awal']
};
console.log(mahatab);

//Accessing object value using "." 
console.log(mahatab.lastName);
//Accessing object value using "[`We can put any expression inside the string literals`]" 
console.log(mahatab['firstName']);

// const knowAboutMahatab = prompt('What do you want to know about Mahatab Hossain? choose between firstName,lastName, age, job friends');
// console.log(mahatab[knowAboutMahatab]);

//We can add property and value into object 

mahatab.location = 'Kolkata';
mahatab.hobby = 'travel';

console.log(mahatab);

//Small challange.
const names = mahatab.firstName; // "." is called member access.
const friend = mahatab.friends.length;
const bfriend = mahatab.friends[0]; // 
console.log(`${names}, has ${friend} friends and his best friend is called ${bfriend}.`);




