let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSLot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;


//Execution will begin from this point.
if (playGame) {
  submit.addEventListener('click', function (e) {
    //not to perform its default action for the event that was triggered.
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}

//This function validate the guess input 
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid number');
  }
  else if (guess < 1) {
    alert('Please Enter number more than 1');
  }
  else if (guess > 100) {
    alert('Please Enter number less than 100')
  }
  else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame(guess);
    }
    else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


//It will check the guess number and give the output according to its range.
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed right number');
    endGame();
  }
  else if (guess > randomNumber) {
    displayMessage('Input number is more than random number');
  }
  else if (guess < randomNumber) {
    displayMessage('Input number is less than random number');
  }
}


function displayGuess(guess) {
  userInput.value = '';
  guessSLot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}


function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
  userInput.value = '';
  //it will disabled the input label
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}


function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSLot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true;
  })
}


