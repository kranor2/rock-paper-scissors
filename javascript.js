// Rock Paper Scissors

// Rules
// scissors beats (>) paper
// paper beats (>) rock
// rock beats (>) scissors

// Process
// keep track of points and number of rounds

let currentRound = 1
let playerPoints = 0
let computerPoints = 0

function game() {

// prompt: ask the user 'Choose your weapon:' with choices in default text display
// store prompt answer in variable 'playerChoice'

let playerChoice = prompt('Choose your weapon:', 'type "rock", "paper", or "scissors" here'); 

// make playerChoice case-insensitive (all lower-case), store in variable 'playerSelection'

let playerSelection = (playerChoice.toLowerCase());
console.log(playerSelection);

// (function getComputerChoice) browser/computer generates random integer between 1 and 3
// store answer in variable 'computerChoice'

    function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}
let computerChoice = getComputerChoice(1, 3); 

// convert playerSelection to integer, wherein rock = 1, paper = 2, scissors = 3

function getComputerSelection() {
    if (computerChoice === 1) {
        return "rock"
    }
    else if (computerChoice === 2) {
        return "paper"
    }
    else if (computerChoice === 3) {
        return "scissors"
    }
    else {
        return "forfeit"
    }
}

let computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "forfeit");
console.log(computerSelection);

// (function playRound) compare playerSelection vs computerSelection based on rules (use if/else if/else)
// if computerSelection beats (>) playerSelection => return string 'You Lose! [item] beats [item]'
// if computerSelection loses to (<) playerSelection => return string 'You Win! [item] beats [item]'
// if computerSelection ties (===) playerSelection => return string 'It's a Tie! Try again.'

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock") {
        return "It's a Tie! Try again.";
        currentRound += 1;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! Rock beats Scissors";
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "paper" && playerSelection === "paper") {
        return "It's a Tie! Try again.";
        currentRound += 1;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
        currentRound += 1;
        playerPoints += 1; 
    }
    else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "It's a Tie! Try again.";
        current_round += 1;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats Paper";
        currentRound += 1;
        playerPoints += 1;
    }
    else {
        return "Error. Please refresh the page.";
    }
}

let roundOutcome = playRound(computerSelection, playerSelection)
console.log(currentRound);
console.log(playerPoints);
console.log(computerPoints);
console.log(roundOutcome);
}

function declareWinner(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        return "You Win! Good game.";
    }
    else if (playerPoints < computerPoints) {
        return "You Lose! Good game.";
    }
    else {
        return "How did you break it?!";
    }
}

let gameOverMsg = declareWinner(playerPoints, computerPoints);

// Game Loop for 5 rounds
function gameLoop() {
    for (i = 0; i < 5; i++) {
        console.log(game());
    }
    console.log(gameOverMsg);
}

console.log(gameLoop());