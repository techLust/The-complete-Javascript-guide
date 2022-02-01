//***************Class expression *************************

// const PersonClass = class{}

//**********************Class declareation ***********************

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //We can add method after constructor without comma(,)
  //Instanced metho
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log("Hey", this.fullName);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log("hey there");
  }
}

const mahatab1 = new PersonClass("Mahatab", 1997);

console.log(mahatab1);
mahatab1.calcAge();
mahatab1.greet();
console.log("Age is", mahatab1.age);

console.log(mahatab1.__proto__ === PersonClass.prototype);

// const samirul = new PersonClass('samirul', 1996);

//Classes are not hoisted.
//Classes are first class citizen
//Classes are executed in strict mode.

//************ getter and setter method ********************** */

const account = {
  owner: "Mahatab Hossain",
  movements: [200, 100, 250, 650, 350],

  get latest() {
    //slice() always return array.
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    account.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 710;
console.log(account.movements);

PersonClass.hey();

//***************************OBJECT.CREATE()******************** */
// class experssion

const personProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

//--------------------------- using Object.create with classes ----------------------
console.log(`-----------object.create using class----------------------`);

studentProto = Object.create(personProto);

studentProto.init = function (firstName, birthYear, course) {
  personProto.init.call(this, firstName, birthYear);
  this.course = course;
  console.log(`My age is ${this.birthYear - 2000} and I study ${this.course};`);
};

studentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

//creating object of studentProto
const jay = Object.create(studentProto);

jay.init("Jay", 2012, "computer science");
jay.introduce();
jay.calcAge();

console.log(`-------------------------------------------`);

//*************** INHERITANCE *********************** */

//---------------------Using function------------------

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};
Person;
student.prototype = Object.create(PersonClass.prototype);

student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new student("Mike", 2000, "Computer science");
mike.introduce();
mike.calcAge();

// ------------------------Using class -------------------------------
console.log(`-----------------Inheritance using class --------------------`);

class studentCl extends PersonClass {
  constructor(fullName, birthYear, course) {
    //properties
    //super() inherits property of immediate parent class. Always need to happen first.
    super(fullName, birthYear);
    this.course = course;
  }

  //methods
  introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };

  //This method overwritten "calcAge()" method of parent class.(polymorphism)
  calcAge = function () {
    console.log(`I'm ${
      2021 - this.birthYear
    } years old. But as a student feel more like 
        ${2021 - this.birthYear + 10}.  `);
  };
}

const developer = new studentCl("Romio", 1996, "computer science");
console.log(developer);
developer.introduce();
developer.greet();
developer.calcAge();
