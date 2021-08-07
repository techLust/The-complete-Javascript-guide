"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const buttonScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container ");
const tabsContent = document.querySelectorAll(".operations__content ");

const nav = document.querySelector(".nav");

const allSection = document.querySelectorAll(".section");

//***************************** MODAL WINDOW **************************************

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//********************************** PAGE NAVIGATION *****************************

// document.querySelectorAll('.nav__link').forEach(function (node) {
//     node.addEventListener('click', function (e) {
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//         console.log(id)
//         console.log('Link clicked');
//         e.preventDefault();
//     })
// })

//NOTE:- Page navigation and Event delegation work same. But only difference is event delegation work
//only when specified selector got clicked.

//*************************** EVENT DELEGATION ********************************** */

// Add event listener to a common parent element.
//Determine what element originated the event.

/* document.querySelector(".nav__links").addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
}); */

//**************************** SMOOTH SCROLLING ********************************* */

buttonScrollTo.addEventListener("click", function (e) {
  //It will return x,y,h,w,t,r,b,l.
  const coordinates = section1.getBoundingClientRect();
  console.log(coordinates);

  console.log(e.target.getBoundingClientRect());

  //It will store X and Y offset value
  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  //It will store Height and width value.
  console.log(
    "Height/Width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling (It is a global functin for scrolling)
  // window.scrollTo(
  //     coordinate.left + window.pageXOffset,
  //     coordinate.top + window.pageYOffset
  // );

  // window.scrollTo(
  //     {
  //         left: coordinate.left + window.pageXOffset,
  //         right: coordinate.top + window.pageYOffset,
  //         behaviour: 'smooth'
  //     }
  // );

  section1.scrollIntoView({ behaviour: "smooth" });
});

//****************** NAV BAR COLOR CHANGE RANDOMLY(EVENT PROPAGATION) ********************************** */

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  //This select current selection i.e (nav__link)
  this.style.backgroundColor = randomColor();
  // console.log('Link:', e.target, e.currentTarget);
  // console.log(e.currentTarget === this);

  //Stop propagation

  // e.stopPropagation();
});

/* document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  this.style.borderRadius = "50px";
  // console.log('Links:', e.target, e.currentTarget);

  // e.stopPropagation();
}); */

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  this.style.width = "110%";
  // console.log('Nav:', e.target, e.currentTarget);

  // e.stopPropagation();
});

//**************************BUILDING TABBED COMPONENT(EVENT DELEGATION)********************************* */

//Instead of this use Event Delegaion.

// tabs.forEach(tab => tab.addEventListener('click', () => console.log('TAB CLICKED')));

tabsContainer.addEventListener("click", function (e) {
  // console.log(e.target);

  //It will select the whole parent. But we want only button.
  // const clicked = e.target.parentElement;

  const clicked = e.target.closest(".operations__tab");

  //Gaurd clause
  if (!clicked) return;

  //We can write  instead of guard clause
  // if (clicked) clicked.classList.add('operations__tab--active');

  //Remove active class from all tab.
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  //Active tab
  clicked.classList.add("operations__tab--active");
  console.log(clicked);

  //Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//******************** MENU FADE IN FADE OUT *********************************** */

//Refactoring the code using DRY principle.
const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", function (e) {
  //"target" property used in order to implement event delegation.
  //Check if nav__link class exist.
  // if (e.target.classList.contains('nav__link')) {
  //     const link = e.target;
  //     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  //     const logo = link.closest('.nav').querySelector('img');

  //     siblings.forEach(el => {
  //         if (el !== link) el.style.opacity = 0.5;
  //     })
  //     logo.style.opacity = 0.5;

  // }
  handleHover(e, 0.5);
});

// mouseenter -> mouseleave, mouseover -> mouseout.

nav.addEventListener("mouseout", function (e) {
  // if (e.target.classList.contains('nav__link')) {
  //     const link = e.target;
  //     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  //     const logo = link.closest('.nav').querySelector('img');

  //     siblings.forEach(el => {
  //         if (el !== link) el.style.opacity = 1;
  //     })
  //     logo.style.opacity = 1;

  // }

  handleHover(e, 1);
});

//Passing an argument into handler function.
//we can do same using bind() method instead using function into event listener

// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));

//**************************** STICKY NAVIGATION ********************************* */

//Initial coordinate selection

// const initialCords = section1.getBoundingClientRect();
// console.log(initialCords);

// window.addEventListener('scroll', function () {
//     console.log(window.scrollY);
//     if (window.scrollY > initialCords.top) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');

//     nav.style.width = '100%'
// })

//------------ STICKY NAVIGATION USING INTERSECTION OBSERVER API---------------

// const obsCallback = function (entries, observer) {
//     entries.forEach(entry => console.log(entry));
// };

// const obsOption = {
//     root: null,
//     threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//***********************REVEALING ELEMENTS ON SCROLL ******************************* */

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//**************************LAZY LOADING IMAGES ********************************** */

const imageTargets = document.querySelectorAll("img[data-src]");
console.log(imageTargets);

const loadImage = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null, //Entire viewport
  threshold: 0, //visible as soon as reach the element.
  rootMargin: "200px", //Load content little bit earlier. so that we would not see loading.
});

imageTargets.forEach((img) => imageObserver.observe(img));

//********************** SLIDER IMPLEMENTATION ********************************* */

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//*******************************DOM life cycle and advance event*********************************

//It will ask user whether they want to leave or reload the site.
/* window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "Are you want to exit";
});
 */
