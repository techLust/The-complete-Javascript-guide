//**********String fundamental************ */
//**********All strings method are case sensitive.


const airline = 'Air India';
const plane = 'GE07E';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

//**********Calculating string length in below ways
console.log(airline.length);
console.log('GE07E'.length);


//**********String method 
//**********IndexOf()
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('India'))

//**********slice(start, end,) method selects the elements starting at the given
//**********arguments and end at, but does not include the given argument.
console.log(airline.slice(4));
console.log(airline.slice(0, 3));

//**********Using indexOf() as a slice() parameter
console.log(airline.slice(0, airline.indexOf(' ')));

//**********Extracting string from the end.
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//**********coding challange find airplane seat is middle or not
const checkSeat = function (seat) {
    const seatNo = seat.slice(-1);
    console.log((seatNo == 'B' || seatNo == 'C') ? "You got middle seat" : "You got lucky seat");
}

checkSeat('11B');
checkSeat('51D');

//**********convert string into object behiend the scene.
console.log(new String('Mahatab'));
console.log(typeof new String('Mahatab'));

//**********toLowerCase() and toUpperCase()
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//**********Fix capitalization in name.
const passenger = 'MahatAB';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const correctName = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctName);

//**********Function for name correction
const nameCorrection = function (name) {
    const lower = name.toLowerCase();
    const correct = lower[0].toUpperCase() + lower.slice(1);
    console.log(correct);
}

nameCorrection('RomIO');
nameCorrection('sAmiRul');

//**********Function for Comparing Emails 
const email = 'mahatab@gmail.com';
const loginEmail = '  Mahatab@Gmail.coM';

// const lowerEmail = email.toLocaleLowerCase();
//fixing white space 
// const trimEmail = lowerEmail.trim();


//Use trimEnd() and trimStart() for first and last space trim.
const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail)
console.log(email === normalisedEmail ? "Login successful" : "Try again");


//Replacing string value for pound symbol(control-shift (hold down) u00a3),
// for rupees(control-shift (hold down)u20b9)
const priceGB = '288,65£'
//converting to rupee
const princeInd = priceGB.replace(',', '.').replace('£', '₹');
console.log(princeInd)

//Replacing entire word 
const announcement = 'All passenger come to boarding door 23. Borarding door 23!';
//Use replaceAll() to replace all occurance.
fixStr = announcement.replace('door', 'gate');
console.log(fixStr)
//replace using regular expression
fixStr1 = announcement.replace(/door/g, 'gate');
console.log(fixStr1)


//Boolean method 
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('320')) //logs true
console.log(plane1.includes('Air'));
console.log(plane1.startsWith('Boing'));
console.log(plane1.endsWith('Ind'));

//checking vlid plane 
if (plane1.startsWith('Air') && plane1.endsWith('neo')) {
    console.log("This is Air India plane");
} else {
    console.log("This is not Air India plane");
}


//Practice exercise check whether a passenger able to travel or not.
//Every string items should make lower case for flexibility.
const checkBaggage = function (items) {
    const lowerItem = items.toLowerCase();
    if (lowerItem.includes('knife') || lowerItem.includes('gun')) {
        console.log("You are not allowed to travel");
    } else {
        console.log('Welcome to on board');
    }
}

checkBaggage('I have a laptop, Phone and Knife');
checkBaggage('I have a socks and Food');
checkBaggage('I have a pocket gun and a charger');


//split() and join()
//split() method creates an array by specified symbol i.e "+" of string.
console.log('My+name+is+Mahatab+Hossain'.split('+'));
console.log('Mahatab Hossain'.split(' '));

const [firstName, lastName] = 'Mahatab Hossain'.split(' ');
console.log(firstName)
console.log(lastName)

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//Capitalise names function
const capitaliseName = function (name) {
    const names = name.split(' ');
    console.log(names);
    const finalName = [];

    for (n of names) {
        // const allName = n[0].toUpperCase() + n.slice(1)
        // finalName.push(allName)

        //Other way to do so
        finalName.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(finalName.join(' '));
}

capitaliseName('mahatab romio samirul awal');

//Padding string number should be grater than string which will be masked.
const str1 = 'Hi all Developer';
console.log(str1.padStart(25, '*'));


//Making masked number function
const maskedNumber = function (number) {
    const numStr = number + ''; //Converting number to string
    const numSlice = numStr.slice(-4)
    return console.log(numSlice.padStart(numStr.length, '*'));
}

maskedNumber(45734539503457);
maskedNumber(16642316443197);

//Repeat method
const message2 = 'Bad weather......All departures delayed';
console.log(message2.repeat(5))

const palneInLine = function (n) {
    console.log(`There are ${n} number of flight in line ${'✈'.repeat(n)} `);
}

palneInLine(5)
palneInLine(10)
palneInLine(15)