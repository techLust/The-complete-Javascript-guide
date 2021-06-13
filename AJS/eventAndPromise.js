'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('Resolve promise 1')
//     .then(res => console.log(res));

// Promise.resolve('Resolved promse 2')
//     .then(res => {
//         for (let i = 0; i < 1000000; i++) { }
//         console.log(res);
//     });

// console.log('Test end');


//*********** BUILDING A SIMPLE PROMISE ******************* */

// create promise using "Promise" constractor and it takes an executor function.

const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Lottery draw is happning...')
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You won the lottery !');
        } else {
            //creating error
            reject(new Error('You lost the lottery !'));
        }
    }, 2000);
});

// Consume promise "then" is always for resolve and "catch" for reject. 

lotteryPromise.then(response => console
    .log(response)).catch(error => console.log(error));


//********PROMISIFYING SETTIMEOUT *********** */

// const wait = function (second) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, second * 1000);
//     });
// };

// wait(1).then(() => {
//     console.log('1 second passed');
//     return wait(1)
// })
// wait(1).then(() => {
//     console.log('2 second passed');
//     return wait(1)
// })
// wait(1).then(() => {
//     console.log('3 second passed');
//     return wait(1)
// })
//     .then(() => console.log('4 second passed'));




// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem !')).catch(x => console.log(x));


// ************************CONSUMING PROMISES WITH ASYNC AND AWAIT ********************************
console.log(`-------------------ASYNC AND AWAIT -------------------------`)
// we can have one or more await inside async function. It is keep runnig while performing the code 
// inside  of it. 


const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};


const whereAmI = async function (country) {

    try {    //geoLocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        const dataGeo = await resGeo.json();
        console.log(dataGeo);
        // Below the same code using async, await

        // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        // .then(res => console.log(res));


        // Await for the result of the promise. It will stop code execution at this point untill
        // the promsie is fulfilled.
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
        console.log(res);

        // Insead of return we will use await.
        // return res.json()

        const data = await res.json();
        console.log(data);
        renderCountry(data[0])
    } catch (err) {
        console.log(err);
    }

};


// console.log('1: will get location');
// whereAmI()
//     .then(city => console.log(`${city}`))
//     .catch(err => console.log(`2: ${err.message}`))
//     .finally(() => console.log(`Finished getting location`));



// In async function always need to wrap code into try catch block. never work async function without this.
(async function () {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch (err) {
        console.error(`2: ${err.message}`)
    }

    console.log('Finished getting location');
})();


whereAmI();
console.log('FIRST')


// ***************ERROR HANDLING WITH TRY, CATCH AND ASYNC, AWAIT ************************

// we can wrap all the code into "try" block so that js will execute it.

// try {
//     let y = 10;
//     const x = 20;
//     x = 2;
// } catch (err) {
//     // evenry error has message property.
//     alert(err.message);

// }

const getJSON = function (url, errMag = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errMag} (${response.status})`);
        return response.json()
    });
};



const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

        // console.log([data1.capital, data2.capital, data3.capital]);


        // Run promise parallal.

        const data = await Promise.all([
            getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
        ]);

        console.log(data.map(d => d[0].capital));

    } catch (err) {
        console.log(err);
    }
};

get3Countries('Bharat', 'nepal', 'china');


// COMBINATORS 
console.log(`----------------COMBINATOR -------------------`)


    // Promise.race([])
    (async function () {
        const res = await Promise.race([
            getJSON(`https://restcountries.eu/rest/v2/name/italy`),
            getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
            getJSON(`https://restcountries.eu/rest/v2/name/nepal`),
        ]);
        console.log(res[0]);
    })();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request take too long'));
        }, sec);
    });
};


Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    timeout(5),
])
    .then(res => console.log(res[0]))
    .catch(err => console.log(err.message));



// Promise.allSettled([])

Promise.allSettled([
    Promise.resolve('SUCCESS'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res));



// Promise.all([])
Promise.all([
    Promise.resolve('SUCCESS'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
])
    .then(res => console.log(res))
    .catch(err => console.log(err));


// Promise.any([])

Promise.all([
    Promise.resolve('SUCCESS'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
])
    .then(res => console.log(res))
    .catch(err => console.log(err));
