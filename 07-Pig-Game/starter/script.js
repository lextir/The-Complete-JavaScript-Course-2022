'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const player = document.querySelectorAll(`.player`);

// Declaring variables without assigning them a value
let scores;
let currentScore;
let activePlayer;
let playing;

// Starting conditions
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; // State variable. Used here to disable buttons when game is finished

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
}

init();

function switchPlayer() {
  // Switch to the other player
  // Ternary operator: if active player is 0, change to 1, else change to 0.
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Change active player background. The toggle attribute adds the class if it wasn't there, and removes it if it was there.
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
}

function resetCurrentScore() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
}

// Roll dice event handler
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to other player
    if (dice !== 1) {
      // Add dice to current score
      currentScore = currentScore + dice;
      // Use activePlayer variable to dynamically define which current score needs to be updated
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      resetCurrentScore();
      switchPlayer();
    }
  }
});

// Hold button event handler
btnHold.addEventListener(`click`, function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // Display the new score
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //  2. check if score >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing: false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      resetCurrentScore();
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, init);
