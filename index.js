var inquirer = require("inquirer");
var Word = require("./word.js");

function gameStart() {
    inquirer.prompt([{
        type: "list",
        name: "playGame",
        message: "Would you like to play a new game of hangman?",
        choices: ["Yes", "No"]
    }]).then(function(user) {

        if (user.playGame === "Yes") {
            console.log("Alright, let's get started!");
            resetGuessesRemaining();






            newGame();

        } else {
            console.log("Ok, maybe another time...");
        }

    });
}

gameStart();


function resetGuessesRemaining() {
    guessesRemaining = 10;
}


function guessLetter() {
	var numGuesses = 10;
    if (numGuesses > 0) {
        inquirer.prompt([{
                name: "letter",
                message: "Guess a letter: "
            }])
            .then(function(userInput) {
                currentWord.exposeLetter(userInput.letter);
                if (currentWord.isExposed()) {
                    // user won
                    console.log("YOU WON!");
                    // confirm next game
                    newGame();

                } else {
                    numGuesses--;
                    guessLetter();
                }
            });
    } else {
        console.log("===================");
        console.log("No more guesses.... Game over.");
        gameStart();
    }

}



function newGame() {

    var wordChoices = ["apple", "banana", "orange", "grape", "strawberry"];
    var currentWord;
    


    if (guessesRemaining === 10) {
      
        console.log("Let's start!");
		
        currentWord = new Word(wordChoices[Math.floor((Math.random() * wordChoices.length))]);
console.log(guessesRemaining);
console.log(currentWord);
        guessLetter();


    } else {
        resetGuessesRemaining();
        newGame();
    }
}