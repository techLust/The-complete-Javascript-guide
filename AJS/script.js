'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Getting country from third party API
const getCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}"/>
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+data.population} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div >
</article >
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};


// Render error 

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};



//************* FETCH DATA USING CALLBACK FUNCTION  ********************/

const getCountryAndNeighbour = function (country) {

    //**** AJAX cal county one */
    // "XMLhttpRequest()" object can be used to exhange data with server behind the scene         
    const request = new XMLHttpRequest();

    // to send to a server we use open() and send() method.
    request.open('GET', ` https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    // "responseText" store the requested responce.
    request.addEventListener('load', function () {

        // Creates JSON data into object.
        const [data] = JSON.parse(this.responseText);

        // Get country one
        getCountry(data);

        // Get neighbour country two
        const [neighbour] = data.borders;

        if (!neighbour) return;

        const request2 = new XMLHttpRequest();
        request2.open('GET', ` https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            getCountry(data2, 'neighbour');
        });
        console.log(data);

    });

};

// getCountryAndNeighbour('bharat');


// Callback hell implementation

// setTimeout(() => {
//     console.log('1 second passed ');
//     setTimeout(() => {
//         console.log('2 second passed ');
//     }, 1000);
//     setTimeout(() => {
//         console.log('3 second passed ');
//     }, 1000);
//     setTimeout(() => {
//         console.log('4  second passed ');
//     }, 1000);
// }, 1000);



// ****************** PROMISE AND THE FETCH API *******************

console.log(`----------------------- Promise ------------------`)
// const request2 = new XMLHttpRequest();
// request2.open('GET', ` https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// request2.send();

// const fetchRequest = fetch(` https://restcountries.eu/rest/v2/name/india`);
// console.log(fetchRequest)




// ************************Fetching country data using Promise()*******************

const getJSON = function (url, errMag = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errMag} (${response.status})`);
        return response.json()
    });
};


// const getCountryData = function (country) {
//     // "fetch()" always return Promise. 
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         // 1). Then method takes two parameter 1. fulfilled 2. rejected.
//         // 2). "json()" retrun object.
//         .then(
//             response => response.json(),
//             // we can do so usign "catch()"
//             // err => alert(err)
//         )
//         .then(function (data) {
//             getCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             if (!neighbour) return;

//             // console.log(data);

//             // country 2
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         }).then(response => {
//             console.log(response);
//             if (!response.ok)
//                 throw new Error(`County not found (${response.status})`)

//             return response.json()
//         })
//         .then(data => getCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err}...`);
//             renderError(`Something went wrong ${err.message}. Try again!`);
//         })
//         // It will run whether promise fulfilled or rejected.
//         .finally(() => countriesContainer.style.opacity = 1);
// };



// REFACTORING ABOVE CODE  */

const getCountryData = function (country) {

    // country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
        .then(function (data) {
            getCountry(data[0]);
            const neighbour = data[0].borders[0];
            if (!neighbour) throw new Error('No neighbour found!');

            // country 2
            return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');

        })
        .then(data => getCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err}...`);
            renderError(`Something went wrong ${err.message}. Try again!`);
        })
        // It will run whether promise fulfilled or rejected.
        .finally(() => countriesContainer.style.opacity = 1);
};


// Error handling 

btn.addEventListener('click', function () {
    getCountryData('Bharat'); // Put australia to see no neighbour error.

});



