const showModal = document.querySelectorAll('.show-modal');
const hiddenModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');

const popUpClose = () => {
    console.log('Pop up close');
    //The class list property is useful to add, remove, and toggle CSS classes on an element.
    hiddenModal.classList.add('hidden');
    overLay.classList.add('hidden');
}

const openPopUp = () => {
    console.log('Button clicked');
    //The class list property is useful to add, remove, and toggle CSS classes on an element.
    hiddenModal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}


for (i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', openPopUp)
}

overLay.addEventListener('click', popUpClose);
closeModal.addEventListener('click', popUpClose);

//Key press event
document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape' && !hiddenModal.classList.contains('hidden')) popUpClose();
});

