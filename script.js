//test if the file is linked to the html
console.log("test")
//delcare constants for each button and link them to the dom
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
//create an empty let for each reassignable variable
let playChoice = ""
let computerChoice = ""
let resultMessage = ""
//Grab the <p> elements from the dom and make them useable in JS
let playerEl = document.getElementById("player-el")
let computerEl = document.getElementById("computer-el")
let resultEl = document.getElementById("result-el")

function computerPick() {
    //generates a random number between 1 and 3
    computerChoice = Math.floor(Math.random()*3) + 1;
    //takes random number and assigns it to a hand
    if (computerChoice === 1) {
        computerChoice = 'ROCK';
    } else if (computerChoice === 2) {
        computerChoice = 'PAPER';
    } else if (computerChoice === 3) {
        computerChoice = 'SCISSORS';
    }
    //Takes randomly generated hand and displays it with text on the html
    computerEl.textContent = "Computer chose - " + computerChoice
}
//
function runGame() {
    //game logic
    computerPick();
    if (computerChoice == 'ROCK' && playChoice == 'ROCK') {
        resultMessage = "It\'s a tie.";
    } else if (computerChoice == 'ROCK' && playChoice == 'PAPER') {
        resultMessage = "You Win!";
    } else if (computerChoice == 'ROCK' && playChoice == 'SCISSORS') {
        resultMessage = "You lose...";
    } else if (computerChoice == 'PAPER' && playChoice == 'PAPER') {
        resultMessage = "It\'s a tie.";
    } else if (computerChoice == 'PAPER' && playChoice == 'ROCK') {
        resultMessage = "You lose...";
    } else if (computerChoice == 'PAPER' && playChoice == 'SCISSORS') {
        resultMessage = "You win!";
    } else if (computerChoice == 'SCISSORS' && playChoice == 'SCISSORS') {
        resultMessage = "It\'s a tie.";
    } else if (computerChoice == 'SCISSORS' && playChoice == 'ROCK') {
        resultMessage = "You win!";
    } else if (computerChoice == 'SCISSORS' && playChoice == 'PAPER') {
        resultMessage = "You lose...";
    }
    //displays result onto html
    resultEl.textContent = "Result - " + resultMessage
}


//makes each button interactive, sets the playerChoice to it, and calls the function to start game
rockBtn.addEventListener("click", function(){
    playChoice = "ROCK"
    playerEl.textContent = "You chose - " + "Rock"
    runGame()
})

paperBtn.addEventListener("click", function(){
    playChoice = "PAPER"
    playerEl.textContent = "You chose - " + "Paper"
    runGame()
})

scissorsBtn.addEventListener("click", function(){
    playChoice = "SCISSORS"
    playerEl.textContent = "You chose - " + "Scissors"
    runGame()
})

