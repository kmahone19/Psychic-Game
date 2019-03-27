var wins = 0;
var losses = 0;
var guess = 10;
var currentGuess = [];
var alphabet = ["abcdefghijklmnopqrstuvwxyz"].split("");
var gameHTML = document.getElementById("game");


document.onkeyup = function (event) {
  var userGuess = event.key;
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  var computerGuess = alphabet[randomIndex];

  if( userGuess === computerGuess){
    win++
  }
  
  gameHTML.innerHTML = `
  <strong>You guessed:</strong> ${userGuess}<br/>
  <stong>Guesses remaining: </strong> ${guess}<br/>
  <strong>Wins:</strong> ${wins}<br/>
  <strong>Losses:</strong> ${losses}<br/>
  Your Guesses so far: ${currentGuess}
  `;
  
}