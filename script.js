// Project RPS Algorithm 
//note RPS = rock, paper, or scissors
//Rock Paper and Scissors are delcared as variables and given a number to correspond to.
let rock = 1
let paper = 2
let scissors = 3
//there is a let that holds the user pick
let playerSelection = prompt("Rock, Paper, or Scissors?", "")
console.log(playerSelection)

// let rock = 1
// let paper = 2
// let scissors = 3


//there is a let that holds the computer pick
let computerSelection = ('')
// the user is prompted to pick rock, paper, or scissors

// the user inputs either rock, paper, or scissors

// the computer randomly picks a number between 1 and 3
function computerPick(computerSelection) {
    computerSelection = Math.floor(Math.random()*3) + 1;
    console.log(computerSelection);
    
}
computerPick()
// the number is converted to RPS

    if (computerSelection === 1) {
        computerSelection = 'rock';
    } else if (computerSelection === 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
console.log(computerSelection)
// the computer plays it's pick


// these two values are compared and the winner is declared.
//rock > scissors

if (computerSelection == 'rock' && playerSelection == 'rock') {
    alert('Tie');
} else if (computerSelection == 'rock' && playerSelection == 'paper') {
    alert('You Win!');
} else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    alert('You lose...');
} else if (computerSelection == 'paper' && playerSelection == 'paper') {
    alert('It\'s a tie.');
} else if (computerSelection == 'paper' && playerSelection == 'rock') {
    alert('You lose...');
} else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    alert('You win!');
} else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
    alert('It\'s a tie.');
} else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    alert('You win!');
} else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    alert('You lose...');
}
// The user is prompted to play again
window.location.reload();