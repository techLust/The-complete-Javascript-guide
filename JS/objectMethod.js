const mahatab = {

    //String
    firstName: 'Mahatab',
    lastName: 'Hossain',
    job: 'Web developer',

    //Number
    birthYear: 1997,

    //Array
    friends: ['Romio', 'Samirul', 'Tausif'],

    //Booleantrue
    hasDriverLicence: true,

    //Any function i.e attached with object is called 'Method'. arrow function does not support "this" keyword.
    // calcAge: (age) => 2021 - age,

    //"this" keyword still access property when object name is change 
    calcAge: function () {
        //Adding property using "this" keyword.
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicence ? 'a'
            : 'no'} driver license.`
    }
};

console.log(mahatab.calcAge(1997));

console.log(`${mahatab.firstName} is a ${mahatab.age} years old ${mahatab.job}, 
${mahatab.hasDriverLicence ? 'he has a driver license' : 'he has no driver license'}`);

//We can call getsummary mehtod to do the same thing as above.
console.log(mahatab.getSummary());


//Coding challange 
const mark = {
    fullName: 'Mark Millar',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }

}
console.log(`*******************************************`)
for (const details in mark) {
    console.log(mark[details]);
}

const jhon = {
    fullName: 'Jhon Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

console.log(`${mark.calcBMI() > jhon.calcBMI() ? `
${mark.fullName} BMI (${mark.calcBMI()}) has higher than ${jhon.fullName} BMI (${jhon.calcBMI()}).`
    : `${jhon.fullName} BMI (${jhon.calcBMI()}) has heigher than ${mark.fullName} BMI(${mark.calcBMI()}).`}`);

//Looping through object 
const details = {
    fName: 'Mahtab',
    lName: 'Hossain',
    mahatabAge: 24
};

for (const property in details) {

    console.log(`Looping through object ${details[property]}`);
}
