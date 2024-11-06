//to generate the random number
//we multiply the random number by 100 because we want a number between 0 and 1 and becuse we want a number between 0 and 100
//if we multiply by 10 we get a number between 0 and 10
// and we add the one because we want a number between 1 and 100
//it is impossible to get a number 0 in this randomness
//parseInt is a function that converts a string to an integer

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowORHigh");
// const guessCount = document.querySelector(".guessCount");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

// Check if the game is active (playGame is true)
if (playGame) {
  // Add an event listener to the submit button for the click event
  submit.addEventListener("click", function (e) {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();
    // Get the user's guess from the input field and convert it to an integer
    const guess = parseInt(userInput.value);
    // Log the guess to the console for debugging
    console.log(guess);
    // Call the function to validate the user's guess
    validateGuess(guess);
  });
}

//this just validate either the number is between 1 and 100
function validateGuess(guess) {
  // Check if the input is not a number
  if (isNaN(guess)) {
    // If the input is not a number, show an alert asking the user to enter a valid number
    alert("Please enter a number");
  }
  // Check if the guess is outside the valid range (1 to 100)
  else if (guess < 1 || guess > 100) {
    // If the guess is not between 1 and 100, show an alert with a valid range message
    alert("Please enter a number between 1 and 100");
  } else {
    // If the guess is valid, add it to the list of previous guesses
    prevGuesses.push(guess);

    // If the user has made 10 guesses (numGuess === 11 means it's the 11th guess)
    if (numGuess === 11) {
      // Display the guess, as it's the last attempt
      displayGuess(guess);
      // Display a message that the user lost the game and show the correct number
      displayResult(`You lost the game. The number was ${randomNumber}`);
      // End the game since the user has reached the guess limit
      endGame();
    } else {
      // If the game is not over, display the guess and check if it's correct
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// check either the message is equal to the random number or not
// if it is not equal it will display the message that indicate you won the game
// if not tell if it is low or high
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayResult(`🎉 You guessed it! The number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayResult("Your guess is too low");
  } else if (guess > randomNumber) {
    displayResult("Your guess is too high");
  }
}

// it cleans the value of the input
// it updates the guess count in the array
function displayGuess(guess) {
  // Clear the input field after the user submits a guess
  userInput.value = "";
  // Add the user's guess to the guessSlot container with a separator ("|")
  guessSlot.innerHTML += `${guess} | `;
  // Increment the number of guesses made by the user
  numGuess++;
  // Update the remaining guesses display (11 - current guess count)
  lastResult.innerHTML = `${11 - numGuess}`;
}

//it displays the result or print the low or high
function displayResult(message) {
  // Update the lowOrHigh element with the provided message, wrapped in an <h2> tag
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // Clear the value in the input field when the game ends
  userInput.value = "";
  // Disable the input field so the user can't make further guesses
  userInput.setAttribute("disabled", "disabled");
  // Create a new <p> element to hold the "Start New Game" button
  p.classList.add("button");
  // Set the inner HTML of the <p> element to include a "Start New Game" button
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  // Append the <p> element with the "Start New Game" button to the startOver container
  startOver.appendChild(p);
  // Set the playGame flag to false, preventing further game actions
  playGame = false;
  // Call the newGame function to handle setting up a new game when the user clicks the button
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevGuesses = []; // Corrected variable name to prevGuesses
    numGuess = 1; // Reset guess count to 1
    guessSlot.innerHTML = ""; // Clear the previous guesses
    lastResult.innerHTML = `${11 - numGuess}`; // Reset remaining guesses display
    lowOrHigh.innerHTML = ""; // Clear the result message
    userInput.removeAttribute("disabled"); // Re-enable the input field
    startOver.removeChild(p); // Remove the "Start New Game" button

    playGame = true; // Set playGame back to true
  });
}
