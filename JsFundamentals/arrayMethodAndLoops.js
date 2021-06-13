let arr = ['a', 'b', 'c', 'd', 'e'];


//***********Slice()************ */
//Slice method retunrn new array (always exclude 1 from mentioned position). It mutate original array.
arr.slice(2);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// If we don't mention any position it will return exact same array.
console.log(arr.slice());

//*************Splice()********* */
//It actually change the original array. Extracted element will gone from original array. simply delete
//mentioned position. 
console.log(arr.splice(2))
console.log(arr);

//***************Reverse()************* */
//This method simply reverse the array. It mutate original array.
const arr2 = ['j', 'i', 'h', 'g'];
console.log(arr2.reverse());

//*********Concat()*******8 */

const letters = arr.concat(arr2);
console.log(letters);
//We can also do the same using spread(...) operator. 
console.log([...arr, ...arr2]);

//********Join()*********** */
console.log(letters.join('-'));



//In for of loop 1st one always be the index and 2nd is the array element.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`)
    }
}

//***************FOR EACH LOOP WITH ARRAY */
//Doing the same using forEach loop. It needs a higher order function. In each iteration call the function.
//In forEach 1st one is current element, 2nd one is index and 3rd one is the entire array .

//We can not break out this loop because 'continue' and 'break' statement does not work on forEach loop.
console.log(`************* FOR EACH **************8`)

movements.forEach(function (movement, i, arr) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`)
    } else {
        console.log(`Movement ${i + 1}: You withdraw ${movement}`)
    }
});

//******Working with Maps and Set using forEach loop */
//MAP
console.log(`-----------forEach with map and set-----------`)
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`)
});

//SET always return unique value.
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD', 'PBP', 'EUR'])
console.log(currenciesUnique)

currenciesUnique.forEach(function (value, _, set) {
    console.log(`${value}: ${value}`)
})