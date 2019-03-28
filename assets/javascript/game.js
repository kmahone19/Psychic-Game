var win = 0;
var lose = 0;
var guess = 10;
var currentGuess = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var gameHTML = document.getElementById("game");
var $wins = document.getElementById("gameWins");
var $losses = document.getElementById("gamelose");
var $guessLeft = document.getElementById("gessLeft");
var $currentGuess = document.getElementById("guessCurrent");

function resetGame() {
  currentGuess = [];
  guess = 10;
}

document.onkeyup = function (event) {
  var userGuess = event.key;
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  var computerGuess = alphabet[randomIndex];

  console.log(userGuess)
  currentGuess.push(userGuess)

  

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

  $wins.innerHTML = `${win}`;
  $losses.innerHTML = `${lose}`;
  $guessLeft.innerHTML = `${guess}`;
  $currentGuess.innerHTML = `${currentGuess}`;
};

resetGame();