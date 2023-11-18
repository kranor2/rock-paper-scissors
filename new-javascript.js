// Rock Paper Scissors Lizard Spock

// Rules
// scissors beats (>) paper
// paper beats (>) rock
// rock beats (>) lizard
// lizard beats (>) spock
// spock beats (>) scissors
// scissors beats (>) lizard
// lizard beats (>) paper
// paper beats (>) spock
// spock beats (>) rock
// rock beats (>) scissors

let currentRound = 0
let playerPoints = 0
let computerPoints = 0
let playerSelection;

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}
let computerChoice = getComputerChoice(1, 5);

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
};

// text display for playerPoints, currentRound, and computerPoints
function gameStatus(message) {
    const container = document.querySelector("#results");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = message;
    container.appendChild(content);
};

const gameRestart = document.querySelector("#restart");
gameRestart.onclick = () => history.go(0);

const playerRock = document.querySelector("#rock");
playerRock.addEventListener("click", () => {
    playerSelection = "rock";
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    var message = "You chose rock."
    gameStatus(message);
});
const playerPaper = document.querySelector("#paper");
playerPaper.addEventListener("click", () => {
    var playerSelection = "paper";
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    var message = "You chose paper."
    gameStatus(message);
});
const playerScissors = document.querySelector("#scissors");
playerScissors.addEventListener("click", () => {
    var playerSelection = "scissors";
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    var message = "You chose scissors."
    gameStatus(message);
});
const playerLizard = document.querySelector("#lizard");
playerLizard.addEventListener("click", () => {
    var playerSelection = "lizard";
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    var message = "You chose lizard.";
    gameStatus(message);
});
const playerSpock = document.querySelector("#spock");
playerSpock.addEventListener("click", () => {
    var playerSelection = "spock";
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    var message = "You chose Spock.";
    gameStatus(message);
});

let computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "lizard" | "spock" | "forfeit");
console.log(computerSelection);

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock" | computerSelection === "paper" && playerSelection === "paper" | computerSelection === "scissors" && playerSelection === "scissors" | computerSelection === "lizard" && playerSelection === "lizard" | computerSelection === "spock" && playerSelection === "spock") {
        currentRound += 1
        return "It's a Tie! Try again."
    }
    else if (computerSelection === "scissors" && playerSelection === "paper" | computerSelection === "paper" && playerSelection === "rock" | computerSelection === "rock" && playerSelection === "lizard" | computerSelection === "lizard" && playerSelection === "spock" | computerSelection === "spock" && playerSelection === "scissors" | computerSelection === "scissors" && playerSelection === "lizard" | computerSelection === "lizard" && playerSelection === "paper" | computerSelection === "paper" && playerSelection === "spock" | computerSelection === "spock" && playerSelection === "rock" | computerSelection === "rock" && playerSelection === "scissors") {
        currentRound += 1;
        computerPoints += 1;
        return "You Lose! Rock beats Scissors"
    }
    else if (computerSelection === "paper" && playerSelection === "scissors" | computerSelection === "rock" && playerSelection === "paper" | computerSelection === "lizard" && playerSelection === "rock" | computerSelection === "spock" && playerSelection === "lizard" | computerSelection === "scissors" && playerSelection === "spock" | computerSelection === "lizard" && playerSelection === "lizard" | computerSelection === "paper" && playerSelection === "lizard" | computerSelection === "spock" && playerSelection === "paper" | computerSelection === "rock" && playerSelection === "spock" | computerSelection === "scissors" && playerSelection === "rock") {
        currentRound += 1;
        playerPoints += 1;
        return "You Win! Rock beats Scissors"
    }
    else {
        return "Error. Please refresh the page."
    }
}

console.log(playerPoints);
console.log(computerPoints);