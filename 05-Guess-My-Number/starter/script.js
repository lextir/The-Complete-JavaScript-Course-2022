'use strict';

//*  Selecting and Manipulating Elements

//* Target HTMl element. Dot selector targets what you need.
// console.log(document.querySelector(`.message`).textContent);

//*  Change HTML element
// document.querySelector(`.message`).textContent = `Correct number`;
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 11;
// document.querySelector(`.guess`).value = 5;

// * Handling Click Events

// First select the HTML element (button). Add the method(). Pass the type of the event (`click) and specify what it needs to do (a function). The function will be called anytime the event happens.

// * read input value on submit

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   console.log(document.querySelector(`.guess`).value);
// });

// * Store the input value into a variable

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = document.querySelector(`.guess`).value;
//   console.log(guess)
// });

// * Change data type from string to number
// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   console.log(guess)
// });

// * In case there is no input entered when clicked..

// * Change data type from string to number
// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   console.log(guess);

//   if (!guess) {
//     document.querySelector(`.message`).textContent = `No number`;
//   }
// });

// * . Implementing the Game Logic

// * Create the random number. Math.trunc to remove decimals. Add + 1 to change range from 0-19 to 1-20.

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector(`.number`).textContent = secretNumber;

/* Compare input number to secretNumber and create the message:
  else if (guess > secretNumber) {
  document.querySelector(`.message`).textContent = `Number is too high!`;
  }

  Reduce score counter upon failed guess:
  - Declare (outside the function): let score = 20 (as starting value)
  - if (score > 1) {
    score = score - 1;
    document.querySelector(`.score`).textContent = score;
    }
  What to when when the player loses (score = 0):

  - Nest  an " if (score > 1).." statement. "else.." player loses.

*/

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);

//   if (!guess) {
//     document.querySelector(`.message`).textContent = `No number entered`;
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `Correct number!!!`;
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//     document.querySelector(`.message`).textContent = `Number is too high!`;
//     score = score - 1;
//     document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//     document.querySelector(`.message`).textContent = `Number is too low!`;
//     score = score - 1;
//     document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
// });

//* Manipulating CSS Styles

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);

//   if (!guess) {
//     // When there is no input
//     document.querySelector(`.message`).textContent = `No number entered`;

//     // When player wins
//   } else if (guess === secretNumber) {
//     // Show winning message
//     document.querySelector(`.message`).textContent = `Correct number!!!`;
//     // Show winning number on screen
//     document.querySelector(`.number`).textContent = secretNumber;
//     // Turn bg color green when player wins
//     document.querySelector(`body`).style.backgroundColor = `green`;

//     // Make number box wider when player wins
//     document.querySelector(`.number`).style.width = `30rem`;

//     //  When guess is too high
//   } else if (guess > secretNumber) {
//     // Only show the message when score is > 0
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `Number is too high!`;
//       score = score - 1;
//       document.querySelector(`.score`).textContent = score;
//       // Player loses when score reaches 0
//     } else {
//       document.querySelector(`.message`).textContent = `You lost!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `Number is too low!`;
//       score = score - 1;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
// });

// document.querySelector(`.again`).addEventListener(`click`, function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(`.message`).textContent = `Start guessing...`;
//   document.querySelector(`.score`).textContent = score;
//   document.querySelector(`.guess`).value = ``;
//   document.querySelector(`body`).style.backgroundColor = `black`;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.number`).style.width = `15rem`;
// });

//*  Implementing Highscores

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);

//   if (!guess) {
//     // When there is no input
//     document.querySelector(`.message`).textContent = `No number entered`;

//     // When player wins
//   } else if (guess === secretNumber) {
//     // Show winning message
//     document.querySelector(`.message`).textContent = `Correct number!!!`;
//     // Show winning number on screen
//     document.querySelector(`.number`).textContent = secretNumber;
//     // Turn bg color green when player wins
//     document.querySelector(`body`).style.backgroundColor = `green`;
//     // Make number box wider when player wins
//     document.querySelector(`.number`).style.width = `30rem`;
// // Set highscore when score is higher than highscore
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(`.highscore`).textContent = highscore;
//     }

//     //  When guess is too high
//   } else if (guess > secretNumber) {
//     // Only show teh emssage when score is > 0
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `Number is too high!`;
//       score = score - 1;
//       document.querySelector(`.score`).textContent = score;
//       // Player loses when score reaches 0
//     } else {
//       document.querySelector(`.message`).textContent = `You lost!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `Number is too low!`;
//       score = score - 1;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
// });

// document.querySelector(`.again`).addEventListener(`click`, function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(`.message`).textContent = `Start guessing...`;
//   document.querySelector(`.score`).textContent = score;
//   document.querySelector(`.guess`).value = ``;
//   document.querySelector(`body`).style.backgroundColor = `black`;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.number`).style.width = `15rem`;

// });

// * Refactoring Our Code: The DRY Principle

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// Create shortcut function for "document.querySelector(`.message`).textContent = ``
function  displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    // When there is no input
    displayMessage (`No number entered`);

    // When player wins
  } else if (guess === secretNumber) {
    // Show winning message
    displayMessage(`Correct number!!!`);
    // Show winning number on screen
    document.querySelector(`.number`).textContent = secretNumber;
    // Turn bg color green when player wins
    document.querySelector(`body`).style.backgroundColor = `green`;
    // Make number box wider when player wins
    document.querySelector(`.number`).style.width = `30rem`;
// Set highscore when score is higher than highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // Whenever the guess is wrong
  } else if (guess != secretNumber) {
        // Only show the message when score is > 0
    if (score > 1) {
      // Ternary operator for the too high/too low message
      displayMessage(guess > secretNumber ? `Number is too high!` : `Number is too low!`);
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
      // Player loses when score reaches 0
    } else {
      displayMessage(`You lost!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `black`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;

});