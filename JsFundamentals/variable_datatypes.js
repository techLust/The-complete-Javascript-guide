//************************* DATA TYPES ************************************* */
//Object value

// let me = {
//     name = "Mahatab"
// };


//Primitive value

// let firstName = "Mahatab";
// let age = 24;

//***************** DYNAMIC TYPING(var, const, let) *************************** */
//Dynamic typing is that without define "let" keyword we can put different value 
//into same variable name---
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);

javaScriptIsFun = "Mahatab"
console.log(javaScriptIsFun);

//****************** OPERATORS **************************** */
let firstName = 'Mahatab';
let lastName = "Hossasin";
console.log(firstName + ' ' + lastName);


let x, y;
x = y = 25 - 15 - 5;
console.log(x, y);

//coding challange
let marksMass = 78; marksHeight = 1.69;
let johnMass = 92; johnHeight = 1.95;

const marksBmi = marksMass / marksHeight ** 2;
console.log("marks BMI:", marksBmi);

const johnBmi = johnMass / (johnHeight * johnHeight);
console.log("JhonBMI:", johnBmi);
console.log(marksBmi > johnBmi);

//******************** STRING AND TEMPLATE LITERALS ************************** */
let occupation = "Full stack developer";
let birthYear = 1997;
let year = 2021;

let mahatab = "Mahatab is a " + " " + occupation + " " + "his age is" + " " + (year - birthYear) + ".";

console.log(mahatab);

//Template literals we can simply writes strings and value using ${variable} inside it  
let mahatabNew = `I'm ${occupation} my age is ${year - birthYear}.`;

console.log(mahatabNew);


