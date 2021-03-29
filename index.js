// Computer Choice
function computerPlay() {
  let compOptions = ["rock", "paper", "scissors"];
  let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
  return compChoice;
}

// Single round
function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "You won!";
  } else {
    result = "You lost";
  }
  console.log(result);
}

let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
