// Rock Paper Scissors

// Rules
// scissors beats (>) paper
// paper beats (>) rock
// rock beats (>) scissors

// Process
// keep track of points and number of rounds

let currentRound = 0
let playerPoints = 0
let computerPoints = 0

function game() {

// (function getComputerChoice) browser/computer generates random integer between 1 and 3
// store answer in variable 'computerChoice'

    function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}
let computerChoice = getComputerChoice(1, 5); 

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
    else if (computerChoice === 4) {
        return "lizard"
    }
    else if (computerChoice === 5) {
        return "spock"
    }
    else {
        return "forfeit"
    }
}

let computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "lizard" | "spock" | "forfeit");
console.log(computerSelection);

// (function playRound) compare playerSelection vs computerSelection based on rules (use if/else if/else)
// if computerSelection beats (>) playerSelection => return string 'You Lose! [item] beats [item]'
// if computerSelection loses to (<) playerSelection => return string 'You Win! [item] beats [item]'
// if computerSelection ties (===) playerSelection => return string 'It's a Tie! Try again.'

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock" | computerSelection === "paper" && playerSelection === "paper" | computerSelection === "scissors" && playerSelection === "scissors" | computerSelection === "lizard" && playerSelection === "lizard" | computerSelection === "spock" && playerSelection === "spock") {
        currentRound += 1
        return "It's a Tie! Try again.";
    }
    else if (computerSelection === "scissors" && playerSelection === "paper" | computerSelection === "paper" && playerSelection === "rock" | computerSelection === "rock" && playerSelection === "lizard" | computerSelection === "lizard" && playerSelection === "spock" | computerSelection === "spock" && playerSelection === "scissors" | computerSelection === "scissors" && playerSelection === "lizard" | computerSelection === "lizard" && playerSelection === "paper" | computerSelection === "paper" && playerSelection === "spock" | computerSelection === "spock" && playerSelection === "rock" | computerSelection === "rock" && playerSelection === "scissors") {
        currentRound += 1;
        computerPoints += 1;
        return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors" | computerSelection === "rock" && playerSelection === "paper" | computerSelection === "lizard" && playerSelection === "rock" | computerSelection === "spock" && playerSelection === "lizard" | computerSelection === "scissors" && playerSelection === "spock" | computerSelection === "lizard" && playerSelection === "lizard" | computerSelection === "paper" && playerSelection === "lizard" | computerSelection === "spock" && playerSelection === "paper" | computerSelection === "rock" && playerSelection === "spock" | computerSelection === "scissors" && playerSelection === "rock") {
        currentRound += 1;
        playerPoints += 1;
        return "You Win! Rock beats Scissors";
    }
    else {
        return "Error. Please refresh the page.";
    }
}

// replacing the prompt => using buttons to obtain playerSelection

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    var playerSelection = "rock";
    let roundOutcome = playRound(computerSelection, playerSelection)
});
const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    var playerSelection = "scissors";
    let roundOutcome = playRound(computerSelection, playerSelection);
});
const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    var playerSelection = "paper";
    let roundOutcome = playRound(computerSelection, playerSelection);
});
const lizard = document.getElementById("lizard");
lizard.addEventListener("click", () => {
    var playerSelection = "lizard";
    let roundOutcome = playRound(computerSelection, playerSelection);
});
const spock = document.getElementById("spock");
spock.addEventListener("click", () => {
    var playerSelection = "spock";
    let roundOutcome = playRound(computerSelection, playerSelection);
})

// make playerChoice case-insensitive (all lower-case), store in variable 'playerSelection'

//let playerSelection = (playerChoice.toLowerCase());
// console.log(playerSelection);

// let roundOutcome = playRound(computerSelection, playerSelection)
console.log(currentRound);
console.log(playerPoints);
console.log(computerPoints);
console.log(roundOutcome);
}

// Game Loop for 5 rounds
// function gameLoop() {
//    for (i = 0; i < 5; i++) {
        //game();
//    }
//}

// gameLoop();

function declareWinner() {
    console.log(playerPoints, computerPoints)
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
console.log(gameOverMsg);