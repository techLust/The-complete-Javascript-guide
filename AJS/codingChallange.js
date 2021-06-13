
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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};



// const whereAmI = function (lat, lng) {
//     // fetch() method provide easy and logical way to fetch resources asynchrously across the network.
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         //then() returns promise. It takes two arguments, callback function for success and faliure for promise.
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Problem with geocoding ${response.status}`)
//             return response.json()
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);

//             return fetch(` https://restcountries.eu/rest/v2/name/${data.country}`)
//         })
//         .then(response => {
//             if (!response.ok) throw new Error(`Country not fount (${response.status})`);
//             return response.json();
//         })
//         .then(data => getCountry(data[0]))
//         .catch(err => {
//             console.error(`Problem with geocoding ${err.message}`);
//         });
// };


const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);



// const request = new XMLHttpRequest();

// request.open('GET', 'https://geocode.xyz/52.508,13.381?geoit=json');
// request.send();

// btn.addEventListener('load', function () {
//     const [data] = JSON.parse(this.resonseText);
//     console.log(data);
//     console.log('geo coding loading ....')
// })



// // fetch() method provide easy and logical way to fetch resources asynchrously across the network.
// fetch('https://geocode.xyz/52.508,13.381?geoit=json')
//     //then() returns promise. It takes two arguments, callback function for success and faliure for promise.
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch(err => {
//         console.error('Fetch resourse failed.', err);
//     })




// btn.addEventListener('click', function () {
//     // fetch() method provide easy and logical way to fetch resources asynchrously across the network.
//     fetch('https://geocode.xyz/52.508,13.381?geoit=json')
//         .then(response => response.json()).then(data => console.log(data));
// });



