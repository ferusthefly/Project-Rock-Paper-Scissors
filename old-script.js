// Project RPS Algorithm 

//note RPS = rock, paper, or scissors

//The user is prompted to pick a hand. This choice is saved to a variable.
let playerSelection = prompt("Rock, Paper, or Scissors?", "")
console.log(playerSelection);

//the player's choice is converted to UPPERCASE to be case insensitive
playerSelection = playerSelection.toUpperCase()
console.log(playerSelection)
//the computer is given a variable to hold its choice.
let computerSelection;

// the computer is given a way to randomly pick a number between 1 and 3
function computerPick(computerSelection) {
    return computerSelection = Math.floor(Math.random()*3) + 1;
    console.log(computerSelection);
    
}

//the computer randomly picks a number 
computerPick();
console.log(computerSelection)
// the number is converted to RPS

if (computerSelection == 1) {
    computerSelection = 'ROCK';
} else if (computerSelection == 2) {
    computerSelection = 'PAPER';
} else if (computerSelection == 3) {
    computerSelection = 'SCISSORS';
} else {computerSelection = 'No true statements'}
console.log(computerSelection)

// these two values are compared and the result is alerted.

if (computerSelection == 'ROCK' && playerSelection == 'ROCK') {
    alert('It\'s a tie.');
} else if (computerSelection == 'ROCK' && playerSelection == 'PAPER') {
    alert('You Win!');
} else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
    alert('You lose...');
} else if (computerSelection == 'PAPER' && playerSelection == 'PAPER') {
    alert('It\'s a tie.');
} else if (computerSelection == 'PAPER' && playerSelection == 'ROCK') {
    alert('You lose...');
} else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
    alert('You win!');
} else if (computerSelection == 'SCISSORS' && playerSelection == 'SCISSORS') {
    alert('It\'s a tie.');
} else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
    alert('You win!');
} else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
    alert('You lose...');
}
// the page is refreshed so the user may play again.
window.location.reload();

