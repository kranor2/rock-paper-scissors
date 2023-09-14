// Rock Paper Scissors

// Rules
// scissors beats (>) paper
// paper beats (>) rock
// rock beats (>) scissors

// Process
// prompt: ask the user 'Choose your weapon:' with choices in default text display
// store prompt answer in variable 'playerChoice'

let playerChoice = prompt('Choose your weapon:', 'type "rock", "paper", or "scissors" here');
console.log(playerChoice); 

// make playerChoice case-insensitive (all lower-case), store in variable 'playerSelection'

let playerSelection = (playerChoice.toLowerCase());
console.log(playerSelection);

// (function getComputerChoice) browser/computer generates random integer between 1 and 3
// store answer in variable 'computerChoice'

    function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}
let computerChoice = getComputerChoice(1, 3); 
console.log(computerChoice);

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

let computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "forfeit") // convert playerSelection to integer, wherein rock = 1, paper = 2, scissors = 3
console.log(computerSelection);

// (function playRound) compare playerSelection vs computerSelection based on rules (use if/else if/else)
// if computerSelection beats (>) playerSelection => return string 'You Lose! [item] beats [item]'
// if computerSelection loses to (<) playerSelection => return string 'You Win! [item] beats [item]'
// if computerSelection ties (===) playerSelection => return string 'It's a Tie! Try again.'

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock") {
        return "It's a Tie! Try again."
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors"
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! Rock beats Scissors"
    }
    else if (computerSelection === "paper" && playerSelection === "paper") {
        return "It's a Tie! Try again."
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock"
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock"
    }
    else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "It's a Tie! Try again."
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper"
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats Paper"
    }
    else {
        return "Error. Please refresh the page."
    }
}

let roundOutcome = playRound(computerSelection, playerSelection)
console.log(roundOutcome);

// Game (function game())
// Repeat the above 'Process' 5 times
// for each line 15 outcome, add 1 to variable computerScore
// for each line 16 outcome, add 1 to variable playerScore
// after 5 rounds, if computerScore > playerScore, return string 'You Lose' and present reset button
// after 5 rounds, if computerScore < playerScore, return string 'You Win' and present reset button