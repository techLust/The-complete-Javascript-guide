'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => document.querySelector('.message').textContent = message;
const displayScore = (scores) => document.querySelector('.score').textContent = scores;
const bgColor = (bgColor) => document.querySelector('body').style.backgroundColor = bgColor;
const secretNumberFunction = (secretNo) => document.querySelector('.number').textContent = secretNo;
const guessNo = () => document.querySelector('.guess').value;

bgColor('skyblue');

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(guessNo());
    if (!guess) {
        displayMessage('No Number.');
    } else if (guess === secretNumber) {
        displayMessage('Correct number');
        secretNumberFunction(secretNumber);
        bgColor('green');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'To High' : 'To Low');
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game');
            displayScore(0);
        }
    }
});

document.querySelector('.agian').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    displayScore(score);
    bgColor('lightblue');
    displayMessage('Start guessing...');
    secretNumberFunction('?');
});