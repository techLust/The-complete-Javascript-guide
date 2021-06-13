const runOnce = function () {
    console.log('This will not run');
}

runOnce();

//Passing whole function and execute as an expression.(IIFE)
(function () {
    console.log("This will run once.")
})();

(() => console.log('This is arrow experiment'))();

//***************Closures*************** */
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
//It displays an interactive list of the properties of the specified javaScrip object.
console.dir(booker);

//Closure examples 

let f;
const g = function () {
    const a = 23;

    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;

    f = function () {
        console.log(b * 2);
    }
}

g();
f();

//Re-assigning f function 
h();
f();

//Example two 

const boardPassenger = function (n, wait) {
    const perGroup = n / 3;
    //setTimeout() method takes two parameter .
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passenger`);
        console.log(`There are three groups, each with ${perGroup} passengers`)
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds.`);
};

boardPassenger(180, 3);


//*************Coding challange*****************

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });

})();