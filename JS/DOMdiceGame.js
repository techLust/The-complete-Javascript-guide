//Selecting elements.
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1')
const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const selectDice = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');

//Global variable 
let score, activePlayer, currentScore, playing;

//Starting condition
// scoreElement0.textContent = 0;
// scoreElement1.textContent = 0;
// selectDice.classList.add('hidden');

//Rolling dice functionality.
// const scores = [0, 0];
// let activePlayer = 0;
// let currentScore = 0;
// let playing = true;


//Init function
const init = () => {

    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;

    selectDice.classList.add('hidden');
    scoreElement0.textContent = 0;
    scoreElement1.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
}

init();
//Switch player function
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
};


rollButton.addEventListener('click', () => {
    if (playing) {
        //Generating random dice.
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice)


        //Display dice
        selectDice.classList.remove('hidden');

        //*****************Selecting Source(src) attribute ********************
        //Generating dynamic image.
        selectDice.src = `../images/dice-${dice}.png`;

        //Check for rolled one(1)
        if (dice !== 1) {
            //Add dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //Switch to next player.
            switchPlayer();
        }
    }
})

//Holding current value
holdButton.addEventListener('click', () => {
    if (playing) {
        //Add current score to active player score.
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //Check player score is >= 100

        if (scores[activePlayer] >= 20) {
            //Finish game
            playing = false;
            selectDice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`player--${activePlayer}`).classList.remove('.player--active');
        } else {
            //Switch to next player 
            switchPlayer();
        }
    }
})

newButton.addEventListener('click', init);