const POSSIBLE_WORDS = ['hippo', 'toyota', 'chess','moose', 'wheel', 'antilope', 'synonym', 'apple', 'spice', 'toes', 'switzerland', 'forest'];
var word = "";
var guesses = "";
var guessCount;
const MAX_GUESSES = 6;

let newGame = function(){
    guess = MAX_GUESSES;
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    console.log('Chosen word: ' + word);
    guesses = "";
    updatePage();
}

let updatePage= function(){
    let clueString = "";
    for (let i = 0; i<word.length; i++){
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        } else {
            clueString += "_ ";
        }
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: "+ guesses;
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();
    if(word.indexOf(letter) < 0){
        guessCount--;
    }
    guesses += letter;
    updatePage();
}