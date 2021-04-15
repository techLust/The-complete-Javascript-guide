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
