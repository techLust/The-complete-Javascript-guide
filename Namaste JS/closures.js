// Closure
function x () {
    var a = 6;
    function y () {
        console.log(a)
    }
    y();
}
x();

// Assign a function in a variable 
function x () {
    var a = function y () {
        console.log(a)
    };
    
    a();
}

// Passing a function in a function
function x () {
    var a = 6;
}
x(function y () {
    console.log(a)
});

// Return function from a function 
function x () {
    var a = 6;
    function y () {
        console.log(a)
    }
    return y
}
x();

// OR

// Return function from a function 
function x () {
    var a = 6;
   return function y () {
        console.log(a)
    }
}
x();

// Calling inner functon from outside

function x () {
    var a = 6;
   return function y () {
        console.log(a)
    }
}
x()()
