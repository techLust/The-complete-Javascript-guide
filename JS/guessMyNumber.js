// It is indicate that the code should be executed in strict mode i.e alway use--
// undeclared variable. It makes easier to write secure javaScript code .
'use strict'

//******************Select any element by their name class name and id***************** */

//The querySelector() method only returns the first element that matches the specified selector. To
//return all the matches use querySelectorAll() method instead.

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number!";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;


//************Event listener and Event handler*************** */

//An event is that something happend on the page i.e onMouseClick(), keyPress() etc.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

//Creating function of repetative code.
const displayMessage = (message) => document.querySelector('.message').textContent = message;
const displayScore = (scores) => document.querySelector('.score').textContent = scores;
const bgColor = (bgColor) => document.querySelector('body').style.backgroundColor = bgColor;
const secretNumberFunction = (secretNo) => document.querySelector('.number').textContent = secretNo;
const guessNo = () => document.querySelector('.guess').value;

// document.querySelector('body').style.backgroundColor = 'skyblue';
bgColor('skyblue');


document.querySelector('.check').addEventListener('click', () => {
    // const guess = Number(document.querySelector('.guess').value)
    const guess = Number(guessNo());
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number';
        displayMessage('No Number.');
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct number';
        displayMessage('Correct number');
        // document.querySelector('.number').textContent = secretNumber;
        secretNumberFunction(secretNumber);

        // document.querySelector('body').style.backgroundColor = "green";
        bgColor('green');

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'To High' : 'To Low';
            displayMessage(guess > secretNumber ? 'To High' : 'To Low');
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = 'You lost the game';
            displayMessage('You lost the game');
            // document.querySelector('.score').textContent = 0;
            displayScore(0);
        }
    }

    //Refactoring and following DRY(dont repeat yourself) method.

    //     } else if (guess > secretNumber) {
    //         if (score > 1) {
    //             document.querySelector('.message').textContent = 'To High';
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = 'You lost the game.';
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     } else if (guess < secretNumber) {
    //         if (score > 1) { console.log(document.querySelector('.message').textContent);
    // document.querySelector('.message').textContent = "Correct Number!";
    // document.querySelector('.number').textContent = 13;
    // document.querySelector('.score').textContent = 10;
    //             document.querySelector('.message').textContent = 'To Low';
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = 'You lost the game';
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     }
    // });

});


// Resetting entire game
document.querySelector('.agian').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';

    // document.querySelector('.score').textContent = score;
    displayScore(score);
    // document.querySelector('body').style.backgroundColor = "lightblue";
    bgColor('lightblue');
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    // document.querySelector('.number').textContent = '?';
    secretNumberFunction('?');
});




