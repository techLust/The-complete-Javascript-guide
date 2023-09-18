const arr = [5, 1, 3, 2, 6];

//MAP

//We can write function and pass in map function
const double = (x) => x*2;

const result = arr.map(double);

//We can write function in map function to.
const binary = arr.map(x => x.toString(2));

console.log("Double", result)
console.log("Binary", binary);

// FILTER 
const findOddNumber = (x) => x % 2 != 0;

const oddNumber = arr.filter(findOddNumber);
console.log('Odd numbers', oddNumber);

// REDUCE

