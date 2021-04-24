//***********Strict mode *************** */

//Strict mode helps us to point out bugs that we mistakently write into our code.
'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I can drive 😇 `);

//****************FUNCTION*****************************/

//Function declarations.
function fruitProcessor(apple, orange) { // passing parameter(declaring function)
    //parameter is like local variable that we use .
    const juice = `juish with ${apple} apples, and ${orange} oranges.`;
    return juice;

}

const appleJuice = fruitProcessor(3, 6); //Passing arguments.(calling function)
//Arguments is an actual value.
console.log(`${appleJuice}`);


//Function expression.
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge(1997);
console.log(`My age is ${age1}`);

//Arrow function
const calcAge3 = (birthYear) => {
    return 2021 - birthYear;
}

const age3 = calcAge3(1997);
console.log(`Display age with arro function ${age3}`);

//We can write arrow functon this way as well. One parameteised and one lined.
const calcAge4 = birthYear => 2021 - birthYear;

const age4 = calcAge4(1997);
console.log(`Without parenthesis and curly braces arrow function ${age4}`);

//Function calling inside another function.

console.log(`******Function calling inside another function *******`)

const cutFruitPieces = fruit => fruit * 4;

const fruitProcessors = (apple, orange) => {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);

    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of 
    orange.`;
}

console.log(fruitProcessors(2, 3));


//coding challange
console.log(`*********Coding challange***************`);
const calcAverage = (score1, score2, score3,) => (score1 + score2 + score3) / 3;

const dolphineAverage = calcAverage(44, 23, 71);
const kolasAverage = calcAverage(65, 54, 49, 'Kolas');
console.log(kolasAverage, dolphineAverage);

const checkWiner = (avgDolphine, avgKolas) => {
    if (avgDolphine >= 3 * avgKolas) {
        console.log(`Dolphine is win `);
    } else if (avgKolas >= 3 * avgDolphine) {
        console.log(`Kolas is win`);
    } else {
        console.log(`No team is win`)
    }
}

checkWiner(dolphineAverage, kolasAverage);
checkWiner(120, 420);

