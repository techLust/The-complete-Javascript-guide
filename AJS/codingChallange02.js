//***************** coding challange 02 ********************** */

const imageContainer = document.querySelector('.images');

const wait = function (second) {
    return new Promise(function (resolve) {
        setTimeout(resolve, second * 1000)
    });
};


const createImage = function (url) {
    return new Promise(function (resolve, reject) {

        const img = document.createElement('img');
        img.src = url;

        img.addEventListener('load', function () {
            // Append image into the DOM
            imageContainer.append(img);
            resolve(img);

        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found!'))
        })
    });

};

let currentImage;

createImage('./img/img-1.jpg')
    .then(img => {
        currentImage = img;
        console.log('Image-1 loaded');
        return wait(2)
    })
    .then(() => {
        currentImage.style.display = 'none';
        return createImage('./img/img-2.jpg');
    })
    .then(img => {
        currentImage = img;
        console.log('Image-2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImage.style.display = 'none';
    })
    .catch(err => {
        console.error(err)
    })



// img.src = "./img/img-1.jpg";

// img.addEventListener('load', function () {
//     createImage();
//     countriesContainer.insertAdjacentElement('beforeend', img);

// })


// const wait = function (second) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, second * 2)
//     });
// };


// wait(1).then(() => {
//     // Load imgage one
//     wait(1);
// });

// wait(1).then(() => {
//     // Load imge two
//     wait(1);

// })