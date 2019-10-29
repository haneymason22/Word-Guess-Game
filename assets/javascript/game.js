var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var guessesLeft = 12;
var guessedLetters = [];

var winsText = document.getElementById("wins-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessedLettersText = document.getElementById("guessedletters-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        if (userGuess === computerGuess) {
            wins ++;
            guessesLeft = 12;
            guessedLetters = [];
        } else {
            guessesLeft --;
            guessedLetters.push(userGuess);
        };

        if (guessesLeft === 0) {
            guessesLeft = 12;
            guessedLetters = [];
        };

        
        winsText.textContent = wins;
        guessesLeftText.textContent = guessesLeft;
        guessedLettersText.textContent = guessedLetters;
      


    };
