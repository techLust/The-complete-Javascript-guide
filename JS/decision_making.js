//*********  CONTROL BLOCK ************** */
const age = 12

if (age >= 18) {
    console.log(`Eligible for driving licese`);
} else {
    const wait = 18 - age;
    console.log(`You have to wait ${wait} more years!`);
}

//coding challange
let marksMass = 78; marksHeight = 1.69;
let johnMass = 92; johnHeight = 1.95;

const marksBmi = marksMass / marksHeight ** 2;
console.log("marks BMI:", marksBmi);


const johnBmi = johnMass / (johnHeight * johnHeight);
console.log("JhonBMI:", johnBmi);
console.log(marksBmi > johnBmi);

if (marksBmi > johnBmi) {
    console.log(`Mark's BMI ${marksBmi} is higer than jhon BMI${johnBmi}`);
} else {
    console.log(`Jhon's BMI ${johnBmi} is higher than marks' BMI${marksBmi}`);
}

//************ TYPE CONVERSION  ***************** */
//converting value from one type to another
const birthYear = '1997';
const newBirthYear = Number(birthYear);
console.log(birthYear, newBirthYear);

//type coercion is autometic or implicit conversion of values from one datatypes to another.
console.log('I am' + 23 + 'years old'); // 23 convert into string autometically.
console.log('23' - '10' - 3) // it produce 10 by autometic conversion.

//Another example
let n = '1' + 1; //"+" always concatinate.
n = n - 1;
console.log(n);


//coding challange
let dolphinScoreOne = 96; dolphinScoreTwo = 108; dolphinScoreThree = 89;

let kolasScoreOne = 88; kolasScoreTwo = 91; kolasScoreThree = 110;

let dolphineAverage;
let kolasAverage;
dolphineAverage = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
console.log("Dolphine Average:", dolphineAverage);

kolasAverage = (kolasScoreOne + kolasScoreTwo + kolasScoreThree) / 3;
console.log("Kolas Average:", kolasAverage);

if (dolphineAverage > kolasAverage) {
    console.log(`The winner is ${dolphineAverage} .`);
} else if (dolphineAverage === kolasAverage) {
    console.log(`Match draw`);
} else if (dolphineAverage < kolasAverage) {
    console.log(`The winer is ${kolasAverage}.`);
} else {
    console.log(`Match is yet to play 😇 `);
}


//*********** SWITCH STATEMENT ************** */
console.log(`**********Switch statement *****************`);

let day = "monday";
switch (day) {
    case 'monday':
        console.log(`Plan course structure `);
        console.log(`Go to coding meetup`);
        //If we don't put break it will execute next case.
        break;
    case 'tuesday':
        console.log(`Prepare theory video`);
        break;
    //We can write two case simalteniously.
    case 'wednesday':
    case 'thursday':
        console.log(`Write code example.`);
        break;
    case 'friday':
        console.log(`Record videos.`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day`);
}

//******** Conditional operator or ternary operator ***************** */
console.log(`***  Conditional operator or Ternary operator ******`);

// const ages = Number(prompt(`Enter Your age to know which one you like to drink`));
const ages = 19;
ages >= 18 ? console.log(`Like to drink wine 🍷`) : console.log(`Line to drink water`);


//Coding challange
let bilValue = 430;
let tip = bilValue * 15 / 100;
let billsValue = 430;
let tips = bilValue * 20 / 100;
bilValue <= 300 || billsValue >= 300 ? console.log(`the bill was ${bilValue}, the tip was ${tip}, and 
the total value ${bilValue + tip}.`) : console.log(`The bill was ${billsValue}, the tip was ${tips},
and the total value is ${billsValue + tips}.`);
