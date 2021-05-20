//***************Coding challange 01 *************** */

console.log(`*************************coding challange 01*********************`)
const juliaDogAge = [3, 5, 2, 12, 7];
const kateDogAge = [4, 1, 15, 8, 3];

const juliaDogAge2 = [5, 2, 4, 1, 15, 8, 3];
const kateDogAge2 = [16, 6, 10, 5, 6, 1, 4];

const juliaDogsCorrected = juliaDogAge.slice();
juliaDogsCorrected.splice(0, 1);
juliaDogsCorrected.splice(-2);

//We can do same using slice()
const dogsAge2 = juliaDogAge2.slice(1, 3);
console.log(`Age is ${dogsAge2}`);

console.log(juliaDogsCorrected);
const dogs = juliaDogsCorrected.concat(kateDogAge);
console.log(dogs);

const checkDogs = function (dogAge) {
    dogAge.forEach(function (age, i) {
        age >= 3 ? console.log(`Dog number ${i + 1} is an adult and is ${age} years old.`) :
            console.log(`Dog number ${i + 1} is still a puppy :).`);
    });
}
checkDogs(dogs);



//****************** Coding challange 02 *******************/

console.log(`************* Coding challange 02 ****************`)

//Calculate ages
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age =>
        age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAges);

    //Filter Ages
    console.log(`---------After filtter-----------`);
    const filterAges = humanAges.filter(filter => filter > 18);
    console.log(filterAges);

    //Averages
    console.log(`---------Average----------`)
    const averageAges = filterAges.reduce((fillAge, element) => fillAge + element, 0) / filterAges.length;
    // console.log(averageAges)
    return averageAges;
}
const avg1 = calcAverageHumanAge(juliaDogAge2);
const avg2 = calcAverageHumanAge(kateDogAge2);
console.log(avg1, avg2);



//****************** Coding challange 03 *******************/

console.log(`************* Coding challange 03 ****************`)

//Calculate ages
const calcAverageHumanAges = ages => {
    const humanAges2 = ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(filter => filter > 18)
        .reduce((fillAge, element, i, arr) => fillAge + element / arr.length, 0)
    console.log(humanAges2);

    //Filter Ages
    // console.log(`---------After filtter-----------`);
    // const filterAges = humanAges.filter(filter => filter > 18);
    // console.log(filterAges);

    //Averages
    // console.log(`---------Average----------`)
    // const averageAges = filterAges.reduce((fillAge, element) => fillAge + element, 0) / filterAges.length;
    // return averageAges;
}
calcAverageHumanAges(juliaDogAge2);
calcAverageHumanAges(kateDogAge2);
// console.log(avg3, avg4)




//**************************Coding challange 04 ********************************** */

console.log(`**********************coding challange 04***************************`)
//Test data
const dog = [
    { weight: 22, curFood: 250, owner: ['Alice', 'Bob'] },
    { weight: 8, currFoof: 200, owner: ['Matilda'] },
    { weight: 13, currFood: 275, owner: ['Sarah', 'John'] },
    { weight: 32, currFood: 340, owner: ['Michael'] },
];

//1. Calculate recomended food portion.
dog.forEach(element => (element.recomFoodPortion = Math.trunc(element.weight ** 0.75 * 28)));
console.log(dog);
//2. Sarah dog eating.
const sarahDog = dog.find(element => element.owner.includes('Sarah'));
console.log(sarahDog)
console.log(`Sarah dog eating to ${sarahDog.currFood > sarahDog.recomFoodPortion ? 'much' : 'little'}`)
//3.Calculating to much and to little eat 
const ownerEatTooMuch = dog.filter(element =>
    element.currFood > element.recomFoodPortion)
    .flatMap(element => element.owner);
console.log(ownerEatTooMuch);

const ownerEatTooLittle = dog.filter(element =>
    element.currFood < element.recomFoodPortion)
    .flatMap(element => element.owner);
console.log(ownerEatTooLittle);
//4.Eat to much and to little
console.log(`${ownerEatTooMuch.join(' and ')}'s dogs eat to much.`);
console.log(`${ownerEatTooLittle.join(' and ')}'s dogs eat to little.`);
//5.Eat same amount of food.
console.log(dog.some(element => element.currFood === element.recomFoodPortion));
//6. Okey amount of food 
const checkEatingOkey = dog.some(element => element.currFood > dog.recomFoodPortion * 0.9 &&
    element.currFood < element.recomFoodPortion * 1.1);
console.log(checkEatingOkey);
//7.
// console.log(dog.filter(checkEatingOkey));
//8.Sorting array.
const dogCopy = dog.slice().sort((a, b) => a.recomFoodPortion - b.recomFoodPortion);
console.log(dogCopy)




//***********************************The Map() method**********************************/

console.log(`***************The Map() method****************`)
//This method is another way to loop over array and produce a brand new array.It receive a callback
//function like forEach loop. It should alway store into a variable.

//Convert Euro to US dollar.
const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsdMovements = movements.map(function (move) {
    return move * euroToUsd;
})
console.log(euroToUsdMovements);

//Same thin using for of loop 

const newMovements = [];
for (const move of movements) newMovements.push(move * euroToUsd);
console.log(newMovements)


//Using arrow() function
const arrowMovements = movements.map(move => move * euroToUsd);
console.log(arrowMovements);

//It works same way like forEach it also access index, element and, whole array.
const movementDescription = movements.map((move, i) =>
    `movements ${i + 1}: you ${move > 0 ? 'deposited' : 'withdrawal'} ${Math.abs(move)}`

    // if (move > 0) {
    //     return `movements ${i + 1} you deposited ${move}`
    // } else {
    //     return `movements ${i + 1} you withdrawal ${move}`
    // }
);
console.log(movementDescription);



//*************************The FILTER method********************************* */

//It's used to filter for element based on the certain condition.It also receive a callback function.

const deposit = movements.filter(function (move) {
    return move > 0;
})
console.log(movements);
console.log(deposit)

const withdrawal = movements.filter(move => move < 0);
console.log(withdrawal)

//We can do the same using for of loop.


//*****************************The REDUCE method********************************** */

//It's used to adding up all elements of an array into single array. It also accepts two 
//parameter 1.callback function 2. initial value.
//Only difference is the first parameter is a accumulator, and rest are same.

const balance = movements.reduce(function (accumulator, currentElement, index, array) {
    console.log(`Iteration no ${index}: ${accumulator}`)
    return accumulator + currentElement
}, 0)
console.log(balance)

//Using arrow function
const balance2 = movements.reduce((acc, curr) => acc + curr, 0)
console.log(balance2)

//Finding maximum using REDUCE method 
const max = movements.reduce((acc, curr) => acc > curr ? acc : curr, movements[0]);
console.log(max)


//****************Chaining all method one after another************************ */

// const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositUsd = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => mov * euroToUsd)
    .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositUsd);



//*******************The FIND() method********************************** */
console.log(`****************** the find() method *******************`)

//It retrievs one element(first element) from an array based on the condition that satisfy. It 
//also accepts a callback() line other method.

const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal)

//Finding any one property by array.property name 

// const account = accounts.find(acc => acc.owner === 'Mahatab Hossain');
// console.log(account)



//********************The findIndex() method*************************************** */

//This method return first index of an array that matches. It also receives callback function.

// const index = accoundts.findIndex(acc => acc.userName === currentAccount.userName);
// console.log(index);



//***************Some() and every() method*******************************  */
console.log(`----------------some() and every() method------------------`)
//some() is like include() method. Only difference is that include() works on values and some works on condition.
//include() also works on array. it checks any one element of an array.

console.log(movements);
console.log(movements.includes(-130));

const checkValue = movements.some(mov => mov > 0);
console.log(checkValue)

//every() method check for all element of an array so that it satisfy condition or not.
console.log(movements.every(mov => mov > 0));

//Seperate callback
const deposit1 = mov => mov > 0;
console.log(movements.some(deposit1));
console.log(movements.every(deposit1));
console.log(movements.filter(deposit1));



//****************flat() and flatMap()************************ */
//flat() used to remove nested array and put it into single array.
const arr = [[1, 2, 3, 7], [7, 8, 9, 10], [2, 9, 6, 8]];
console.log(arr.flat());



//********************** SORT() ******************************* */
//This method mutate(original array changed permanently) the array.

//Strings
const owner = ['Mahatab', 'Romio', 'Tausif', 'Samirul']
console.log(owner.sort());
console.log(owner);
//Numbers
const ownerNumber = [5, 7, 9, 6, 9, 8, 1];
console.log(ownerNumber.sort());
console.log(ownerNumber);
console.log(movements);
console.log(movements.sort());

//Return < 0 (keep order)(a, b) and > 0 (switch order)(b,a)

//Ascending order
movements.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
})
console.log(movements);
console.log(`---------using a-b ------------`)
movements.sort((a, b) => a - b);
console.log(movements);

//Descending order
movements.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
});
console.log(movements);
console.log(`-----------using b-a------------`)
movements.sort((a, b) => b - a);
console.log(movements)

// Note: for mixed(string and number) array sort() will not work.



//****************** PRGRAMATICALLY CREATE ARRAY using fill() method ************************* */
//Simple array
const simplyArr = [5, 6, 8, 4, 7]
console.log(simplyArr)
//Using new keyword and Array() constractor
const x = new Array(1, 5, 6, 7, 9, 10);
console.log(x);

//Using fill() method. It will fill entire array by 8
const expArr = new Array(5);
expArr.fill(8)
console.log(expArr)
//fill() method receive three parameter like slice. it will fill expArr by 23 in position 2 to 4.
expArr.fill(23, 2, 4);
console.log(expArr)

//Array.form() takes two parameter length and callback function.
const y = Array.from({ length: 7 }, () => 1);
console.log(y);