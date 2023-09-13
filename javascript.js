// Rock Paper Scissors

// Rules
// scissors beats (>) paper
// paper beats (>) rock
// rock beats (>) scissors

// Process
// prompt: ask the user 'Choose your weapon:' with three choices 'rock', 'paper', or 'scissors'
// multiple choice prompt? case-insensitive text prompt?
// store the answer to prompt in variable 'playerSelection'
// (function getComputerChoice) browser/computer generates random selection between 'rock', 'paper', or 'scissors'
// store ^^ answer in variable 'computerSelection'
// (function playRound) compare playerSelection vs computerSelection based on rules (use if/else if/else)
// if computerSelection beats (>) playerSelection => return string 'You Lose! [item] beats [item]'
// if computerSelection loses to (<) playerSelection => return string 'You Win! [item] beats [item]'

// Game (function game())
// Repeat the above 'Process' 5 times
// for each line 15 outcome, add 1 to variable computerScore
// for each line 16 outcome, add 1 to variable playerScore
// after 5 rounds, if computerScore > playerScore, return string 'You Lose' and present reset button
// after 5 rounds, if computerScore < playerScore, return string 'You Win' and present reset button