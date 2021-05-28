'use strict';

//**************************************Selecting Elements ******************************* */

//Select document.
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//Select any from document by their name or class or id .. 
document.querySelector('.header');

//This method returns NodeList of selected elements.
const allSection = document.querySelectorAll('.section');
console.log(allSection);

//Select element by ID
document.getElementById('section--1');

//Select elements by Tag name. It returns HTML collections.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


//******************************************CREATE AND INSERT ELEMENT INO DOM*********************** */

//create element
const message = document.createElement('div');

//add class into it
message.classList.add('cookie-message');

//add text content
message.textContent = 'This is newly created elements';

//add another element(button) into it
message.innerHTML = 'Want to add button into div element. <button class="btn btn-close"> Got it </button>';

//Select any element and push it into HTML document.
const body = document.querySelector('body');
body.after(message);
//It will add message element as a first child of selected element.
// body.prepend(message);

//It will add message element as a last child of selected element.
body.append(message);

//Add it both as first and last child simalteniously 
// body.append(message.cloneNode(true));

//add before selected element 
// body.before(message);

//add after selected element
// body.after(message);


//*************************************************DELETE ELEMENT ************************************* */

document.querySelector('.btn-close').addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
});


//******************************* ADD STYLES *************************************************** */

//This style always set as inline style.
message.style.background = 'gray';
message.style.width = '120%';

console.log(message.style.color); //empty string
console.log(message.style.background) // return color name

//Fetch browser computed style
console.log(getComputedStyle(message).color); //Show browser default color
console.log(getComputedStyle(message).height); //Show browser default height.

//change CSS variable value
document.documentElement.style.setProperty('--color-primary', 'orange');


//************************* ACCESS HTML ATTRIBUTES ******************************************** */

const logo = document.querySelector('.nav__logo');
console.log(logo.src);  //Relative URL
console.log(logo.getAttribute('src'));  //Absolute URL
console.log(logo.alt);
console.log(logo.className);

//Modify attributes 
logo.alt = 'Logo caption changed';

//access non-standered attribute
console.log(logo.designer) // undefined
console.log(logo.getAttribute('designer'));
//Insert attribute
logo.setAttribute('company', 'banking');


//****************************DATA ATTRIBUTE ******************************* */

console.log(logo.dataset.versionNumber);


//***************************CLASSESS****************************************** */

logo.classList.add('c', 'd', 'e') // we can add one or more class at a time.
logo.classList.remove('c', 'b') //we can add one or more class at a time.
logo.classList.toggle('c');
logo.classList.contains('c') //Not include.


//*************************Advance DOM event and lifecycle *******************************8 */

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree loaded', e);
});

window.addEventListener('load', function (e) {
    console.log('Page fully loaded', e);
});


window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    console.log(e);
    e.returnValue = '';
})



