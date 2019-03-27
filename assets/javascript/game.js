var win = 0;
var lose = 0;
var guess = 10;
var currentGuess = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var gameHTML = document.getElementById("game");

document.onkeyup = function (event) {
  var userGuess = event.key;
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  var computerGuess = alphabet[randomIndex];

  console.log(userGuess)
  currentGuess.push(userGuess)

  function resetGame() {
    currentGuess = [];
    guess = 10;
  }

  if (userGuess === computerGuess) {
    win++;
    resetGame();
  } 
  
  else if (userGuess !== computerGuess) {
    guess = guess - 1;
  }

  if (guess == 0) {
    lose++;
    resetGame();
  }

  gameHTML.innerHTML = `
  <strong>You guessed:</strong> ${userGuess}<br/>
  <stong>Guesses remaining: </strong> ${guess}<br/>
  <strong>Wins:</strong> ${win}<br/>
  <strong>Losses:</strong> ${lose}<br/>
  Your Guesses so far: ${currentGuess}`;

}