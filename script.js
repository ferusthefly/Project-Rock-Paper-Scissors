//Test if the file is linked to the html
console.log("test")
//Delcare constants for each button and link them to the dom
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
//Create an empty let for each reassignable variable
let playerSelection = ""
let computerSelection = ""
let resultMessage = ""
//Grab the <p> elements from the dom and make them useable in JS
let playerEl = document.getElementById("player-el")
let computerEl = document.getElementById("computer-el")
let resultEl = document.getElementById("result-el")

function computerPlay() {
    //Generates a random number between 1 and 3
    computerSelection = Math.floor(Math.random()*3) + 1;
    //Takes random number and assigns it to a hand
    if (computerSelection === 1) {
        computerSelection = 'Rock';
    } else if (computerSelection === 2) {
        computerSelection = 'PAPER';
    } else if (computerSelection === 3) {
        computerSelection = 'SCISSORS';
    }
    //Takes randomly generated hand and displays it with text on the html
    computerEl.textContent = "Computer chose - " + computerSelection
}
//
function playRound() {
    //Game logic
    computerPlay();
    if (computerSelection == 'Rock' && playerSelection == 'Rock') {
        resultMessage = "It\'s a tie.";
    } else if (computerSelection == 'Rock' && playerSelection == 'PAPER') {
        resultMessage = "You Win!";
    } else if (computerSelection == 'Rock' && playerSelection == 'SCISSORS') {
        resultMessage = "You lose...";
    } else if (computerSelection == 'PAPER' && playerSelection == 'PAPER') {
        resultMessage = "It\'s a tie.";
    } else if (computerSelection == 'PAPER' && playerSelection == 'Rock') {
        resultMessage = "You lose...";
    } else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
        resultMessage = "You win!";
    } else if (computerSelection == 'SCISSORS' && playerSelection == 'SCISSORS') {
        resultMessage = "It\'s a tie.";
    } else if (computerSelection == 'SCISSORS' && playerSelection == 'Rock') {
        resultMessage = "You win!";
    } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
        resultMessage = "You lose...";
    }
    //Displays result onto html
    resultEl.textContent = "Result - " + resultMessage
}


//Makes each button interactive, sets the playerChoice to it, and calls the function to start game
rockBtn.addEventListener("click", function(){
    playerSelection = "Rock"
    playerEl.textContent = "You chose - " + "Rock"
    playRound()
})

paperBtn.addEventListener("click", function(){
    playerSelection = "PAPER"
    playerEl.textContent = "You chose - " + "Paper"
    playRound()
})

scissorsBtn.addEventListener("click", function(){
    playerSelection = "SCISSORS"
    playerEl.textContent = "You chose - " + "Scissors"
    playRound()
})

function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay()
     }
     
}