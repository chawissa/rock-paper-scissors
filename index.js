let playerScore = 0;
let computerScore = 0;

// Computer Choice
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

// Play
function playRound() {
  let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}. Player score: ${playerScore} and Computer score: ${computerScore}`;

    if (playerScore === 5) {
      result += "You won the game";
    }
  } else if (playerSelection === computerSelection) {
    result = `It's a draw! You both picked ${playerSelection}. Player score: ${playerScore} and Computer score: ${computerScore}`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}. Player score: ${playerScore} and Computer score: ${computerScore}`;
  }
  console.log(result);
}

playRound();
