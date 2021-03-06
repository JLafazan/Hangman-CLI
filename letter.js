/* Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
	A string value to store the underlying character for the letter
	A boolean value that stores whether that letter has been guessed yet
	A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
	A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly */
	
// CONSTRUCTOR Function per above specs.
// var Letter = function(letter) {
//   this.letter = letter;
//   this.unhide = false;
//   this.letterRender = function() {
//     if(this.letter == " "){ 
//       this.unhide = true;
//       return " ";
//       console.log(this.letter);
//     }if(this.unhide === false){ 
//       return " _";
//     } else{ 
//       return this.letter;
//     }
//   };
// };

var Letter = function(letter){
  this.letter = letter;
  this.unhide = false;
  this.letterRender = function(){
    if(this.unhide) {
      return this.letter;
    } else {
      return "_";
    }
  };
  this.trueLetter = function(guessLetter){
    if(guessLetter == this.letter) {
      this.unhide = true;
    }
  };
  this.guessedStatus = function() {
    return this.unhide;
  };
};



// export to word.js
module.exports = Letter;


