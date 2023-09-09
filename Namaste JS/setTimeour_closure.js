function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 2000);
    console.log('Hey there!');
}

// Print output

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); // it prints 6 6 6 6 6 6 because it refers to the same memory location
        }, i * 1000);
    }
    console.log('Hey there!');
}

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); // it prints 1 2 3 4 5 6 because let has block scope and it create copy for each value
        }, i * 2000);
    }
    console.log('Hey there !');
}

function x () {
    for(var i = 1; i <= 5; i++){
        function y (x) {
            setTimeout(function () {
                console.log(x) 
            }, x * 1000)
        }
        y(i);
    }
    console.log('Hey there!')
}