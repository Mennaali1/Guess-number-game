'use strict';

// Generate a random secret number between 1 and 20
const secreteNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the score, high score, and message variables
let score = 20;
let highScore = 0;
let message = '';

// Function to set the message displayed on the webpage
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  // Get the user's guess from the input field
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    message = 'No Number';
    setMessage(message);
  }
  // When the player's guess is correct
  else if (guess === secreteNumber) {
    message = 'Correct Number!';
    setMessage(message);
    score += 1;

    // Update the score display and styling for winning scenario
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('.number').style.width = '30rem';

    // Update the high score if the current score is higher
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secreteNumber) {
    // When the guess is incorrect
    if (score > 1) {
      message = guess > secreteNumber ? 'Too high!' : 'Too Low!';
      setMessage(message);
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      // When the player runs out of attempts
      message = 'You Lost The Game';
      setMessage(message);
      document.querySelector('.score').textContent = 0;
    }
  }

  // Event listener for the "Again" button to reset the game
  document.querySelector('.again').addEventListener('click', function () {
    message = 'Start guessing...';
    setMessage(message);
    score = 20;
    document.querySelector('.score').textContent = score;

    // Reset styling for a new game
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // Generate a new random secret number
    secreteNumber = Math.trunc(Math.random() * 20) + 1;
  });
});
