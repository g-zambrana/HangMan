const POSSIBLE_WORDS = ['hippo', 'toyota', 'chess','moose', 'wheel', 'antilope', 'synonym', 'apple', 'spice', 'toes', 'switzerland', 'forest'];
var word = "";
var guesses = "";
var guessCount;
var gameOver = false;
const MAX_GUESSES = 6;

let newGame = function(){
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    console.log('Chosen word: ' + word);
    guesses = "";
    gameOver = false;
    updatePage();
}

let checkWord = function(){
    for (let i = 0; i < word.length; i++){
        let currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) < 0){
            return false;
        }
    }
    return true;
};

let updatePage= function(){
    let clueString = "";
    for (let i = 0; i<word.length; i++){
        let currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        } else {
            clueString += "_ ";
        }
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");

    if(word === ""){
        guessArea.textContent = "Press New Game to start.";
    } else if (gameOver && checkWord()){
        guessArea.textContent = "Guesses: " + guesses + "YOU WON!!!";
    } else if (gameOver && guessCount === 0){
        guessArea.textContent = "Guesses: " + guesses + "YOU LOST! :( , the word was " + word;
    } else {
        guessArea.textContent = "Guesses: " + guesses;
    }

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();

    if (word ===""){
        document.getElementById("guesses").textContent = "Press new game before guessing.";
        input.value = "";
        return;
    }

    

    if(word.indexOf(letter) < 0){
        guessCount--;
    }
    guesses += letter;
    input.value= "";
    updatePage();
}