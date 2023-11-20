// Rock Paper Scissors Lizard Spock

let currentRound = 0
let playerPoints = 0
let computerPoints = 0

const playerScore = document.getElementById("playerScore");
const roundMarker = document.getElementById("roundMarker");
const computerScore = document.getElementById("computerScore");
const playerButtons = document.querySelectorAll(".playerButtons");

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
function playerChoice(message1) {
    const container = document.querySelector("#results");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = message1;
    container.appendChild(content);
};

function gameStatus(message2) {
    const container = document.querySelector("#results");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = message2;
    container.appendChild(content);
}

function ending(message3) {
    const container = document.querySelector("#results");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = message3;
    container.appendChild(content);
}

const gameRestart = document.querySelector("#restart");
gameRestart.onclick = () => history.go(0);

const playerRock = document.querySelector("#rock");
playerRock.addEventListener("click", () => {
    playerSelection = "rock";
    var message1 = "You chose rock."
    playerChoice(message1)
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
});
const playerPaper = document.querySelector("#paper");
playerPaper.addEventListener("click", () => {
    var playerSelection = "paper";
    var message1 = "You chose paper."
    playerChoice(message1);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
});
const playerScissors = document.querySelector("#scissors");
playerScissors.addEventListener("click", () => {
    var playerSelection = "scissors";
    var message1 = "You chose scissors."
    playerChoice(message1);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
});
const playerLizard = document.querySelector("#lizard");
playerLizard.addEventListener("click", () => {
    var playerSelection = "lizard";
    var message1 = "You chose lizard.";
    playerChoice(message1);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
});
const playerSpock = document.querySelector("#spock");
playerSpock.addEventListener("click", () => {
    var playerSelection = "spock";
    var message1 = "You chose Spock.";
    playerChoice(message1);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
});

let computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "lizard" | "spock" | "forfeit");
console.log(computerSelection);

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

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "scissors" && playerSelection === "paper") {
        var message2 = "You Lose! Scissors cuts paper."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        var message2 = "You Win! Scissors cuts paper."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        var message2 = "You Lose! Paper covers rock."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        var message2 = "You Win! Paper covers rock."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "rock" && playerSelection === "lizard") {
        var message2 = "You Lose! Rock crushes lizard."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "lizard" && playerSelection === "rock") {
        var message2 = "You Win! Rock crushes lizard."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }    
    else if (computerSelection === "lizard" && playerSelection === "spock") {
        var message2 = "You Lose! Lizard poisons Spock."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "spock" && playerSelection === "lizard") {
        var message2 = "You Win! Lizard poisons Spock."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "spock" && playerSelection === "scissors") {
        var message2 = "You Lose! Spock smashes scissors."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "scissors" && playerSelection === "spock") {
        var message2 = "You Win! Spock smashes scissors."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "scissors" && playerSelection === "lizard") {
        var message2 = "You Lose! Scissors decapitates lizard."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "lizard" && playerSelection === "scissors") {
        var message2 = "You Win! Scissors decapitates lizard."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "lizard" && playerSelection === "paper") {
        var message2 = "You Lose! Lizard eats paper."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "paper" && playerSelection === "lizard") {
        var message2 = "You Win! Lizard eats paper."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "paper" && playerSelection === "spock") {
        var message2 = "You Lose! Paper disproves Spock"
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "spock" && playerSelection === "paper") {
        var message2 = "You Win! Paper disproves Spock."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1; 
    }
    else if (computerSelection === "spock" && playerSelection === "rock") {
        var message2 = "You Lose! Spock vaporizes rock."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "rock" && playerSelection === "spock") {
        var message2 = "You Win! Spock vaporizes rock."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        var message2 = "You Lose! Rock crushes scissors."
        gameStatus(message2);
        currentRound += 1;
        computerPoints += 1;
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        var message2 = "You Win! Rock crushes scissors."
        gameStatus(message2);
        currentRound += 1;
        playerPoints += 1;
    }
    else if (computerSelection === "rock" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "scissors" || computerSelection === "lizard" && playerSelection === "lizard" || computerSelection === "spock" && playerSelection === "spock") {
        var message2 = "It's a Tie! Try again."
        gameStatus(message2);
        currentRound += 1;
    }

    playerScore.innerHTML = `${playerPoints}`;
    roundMarker.innerHTML = `${currentRound}`;
    computerScore.innerHTML = `${computerPoints}`;

    if (playerPoints === 5) {
        function gameOver(event) {
            playerRock.removeEventListener("click", gameOver);
            playerPaper.removeEventListener("click", gameOver);
            playerScissors.removeEventListener("click", gameOver);
            playerLizard.removeEventListener("click", gameOver);
            playerSpock.removeEventListener("click", gameOver);
        }
        var gameOutcome = "You WIN the game! Click the restart button to play again."
        const container = document.querySelector("#victory");
        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = gameOutcome;
        container.appendChild(content);
    }
    else if (computerPoints === 5) {
        function gameOver(event) {
            playerRock.removeEventListener("click", gameOver);
            playerPaper.removeEventListener("click", gameOver);
            playerScissors.removeEventListener("click", gameOver);
            playerLizard.removeEventListener("click", gameOver);
            playerSpock.removeEventListener("click", gameOver);
        }
        var gameOutcome = "You LOSE the game! Click the restart button to play again."
        const container = document.querySelector("#victory");
        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = gameOutcome;
        container.appendChild(content);
    }
    else {
        var gameOutcome = ""
    }
};