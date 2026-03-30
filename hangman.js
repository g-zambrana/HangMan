const POSSIBLE_WORDS = ['hippo', 'toyota', 'chess','moose', 'wheel', 'antilope', 'synonym', 'apple', 'spice', 'toes'];

let newGame = function(){
    var randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    var word = POSSIBLE_WORDS[randomIndex];
    console.log('Chosen word: ' + word)


    let clueString = "";
    for (let i = 0; i < word.length; i++){
        clueString += "_ ";
    }


    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}