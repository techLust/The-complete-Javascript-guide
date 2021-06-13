//JS represent every number as a floting point number.
console.log(23 === 23.0);

//Converting string into number
console.log(Number('23'));
//other way
console.log(+'23');

//Parsing(it will figure out only number from mixed value).
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('39def'));

console.log(Number.parseFloat('2.5rem'));

//Check if a value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

//Checking if a value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(29));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

//Rounding number
console.log(Math.sqrt(25));
console.log(23 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max((17, 18, 19, 25, 26, 30)));
console.log(Math.max((17, 18, 19, '23', 26, 30)));
console.log(Math.max((17, 18, 19, '25px', 26, 30)));

console.log(Math.min(2, 5, 7, 9, 13, 71));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//Random integer generate
const randomInt = (max, min) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

//Rounding integers 
console.log(Math.trunc(23.33));
console.log(Math.round(23.356));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.6));

console.log(Math.floor(23.3));
console.log(Math.floor(23.6));

console.log(false == '0');//true
//It does do type coarsion
console.log(false === '0');//false

//BigInt(It is reprsent in 64 bit)


//***************Date and Times****************

//create date
const now = new Date();
console.log(now);

console.log(new Date('Thu May 20 2021 22:53:01'));
console.log(new Date('May 09 1997'));

console.log(new Date(1997, 5, 9, 10, 30, 5));

//Initial time 
console.log(new Date(0));

//Converting day into milisecond
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with date 
const future = new Date(1997, 5, 9, 10, 30);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getTime());//miliseconds from initial date
console.log(future.toISOString());

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

const now1 = new Date();
const day = `${now1.getDay()}`.padStart(2, 0);
const month = `${now1.getMonth() + 1}`.padStart(2, 0); //It always 0 based so we need to add 1.
const year = now1.getFullYear();
const hour = `${now1.getHours()}`.padStart(2, 0);
const minute = `${now1.getMinutes()}`.padStart(2, 0);
console.log(`${day}/${month}/${year}, ${hour}:${minute}`);

//**************************OPERTION WITH DATE ************************* */
const futures = new Date(2021, 5, 21, 10, 9);
//It will convert abouve date to milisecond.
console.log(+futures);


const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days = calcDaysPassed(new Date(1997, 5, 9), new Date(2021, 21, 5));
console.log(days)

//********************* INTERNATIONALIZE NUMBERS*************************** */
const num = 38847956910;

//with object 
const options = {
    style: 'currency',
    currency: 'EUR',
    grouping: false, // It will not seprate the number.
};

console.log('US:', new Intl.NumberFormat('en-US').format(num));
console.log('Garmany:', new Intl.NumberFormat('de-DE').format(num));
console.log('Syria:', Intl.NumberFormat('ar-SY').format(num));

console.log(
    navigator.language,
    new Intl.NumberFormat(navigator.language, options).format(num)
);



//*******************************SetTimeOut() and clearTimeout()************************

//This function runs after a certian amount of time. But callback function runs only once.

// const ingredients = ['olives', 'spinach'];

// const pizzaTimer = setTimeout(
//     () => console.log('Here is your pizza'),
//     3000,
//     ...ingredients
// );
// console.log('Waiting...');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)


//**************setInterval() and clearInterval()*************************** */

//setInteval(). In this method callback function will run every specified amount of time.

// setInterval(() => {
//     const now = new Date();
//     console.log(now.getHours());
//     console.log(now.getMinutes());
//     console.log(now.getSeconds());
// }, 1000);
//clearInterval(now);