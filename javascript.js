// Rock Paper Scissors

// Rules
// scissors beats (>) paper
// paper beats (>) rock
// rock beats (>) scissors

// Process
let playerSelection = prompt('Choose your weapon:', 'type "rock", "paper", or "scissors" here'); // prompt: ask the user 'Choose your weapon:' with choices in default text display
    console.log(playerSelection); // store prompt answer in variable 'playerSelection'
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}
var computerChoice = getComputerChoice(1, 3); // (function getComputerChoice) browser/computer generates random integer between 1 and 3; store in variable 'computerChoice'
console.log(computerChoice)

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
var computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "forfeit") // convert playerSelection to integer, wherein rock = 1, paper = 2, scissors = 3
console.log(computerSelection)

// (function playRound) compare playerSelection vs computerSelection based on rules (use if/else if/else)
// if computerSelection beats (>) playerSelection => return string 'You Lose! [item] beats [item]'
// if computerSelection loses to (<) playerSelection => return string 'You Win! [item] beats [item]'
// if computerSelection ties (===) playerSelection => return string 'It's a Tie! Try again.'

// Game (function game())
// Repeat the above 'Process' 5 times
// for each line 15 outcome, add 1 to variable computerScore
// for each line 16 outcome, add 1 to variable playerScore
// after 5 rounds, if computerScore > playerScore, return string 'You Lose' and present reset button
// after 5 rounds, if computerScore < playerScore, return string 'You Win' and present reset button