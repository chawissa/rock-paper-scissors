function computerPlay() {
  let compPick = ["rock", "paper", "scissors"];
  let compGuess = compPick[Math.floor(Math.random() * compPick.length)];
  return compGuess;
}
console.log(computerPlay());
