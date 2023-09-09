// Function Declaration aka Function statement  
function a(){
    // this is a function statement
    console.log('a called')
}
// Function Expression
var b = function () {
    console.log('b called')
}

` Difference between function statement and function expression is hoisting
if we call function a it will show "a called" and b will show "not a function" 
because in initial memory creation phase it will be assign "undefined"
`

// Anonymous Function(function without a name)
// function (){}

// Named Function Expression

// Difference between Parameters & Arguments

var c = function (param1, param2) { //`param1 & param2 are parameter`
console.log(param1, param2);
}
c(1, 2);  //while invoking function we pass value that's called argument

// First class function 
`Passing a function inside a function as an argument is called first class function`

// Higher order function

// Arrow functions