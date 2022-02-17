"use strict";

function game() {
  let playerCount = 0,
    computerCount = 0,
    tieCount = 0,
    victor;

  for (let i = 0; i < 5; i++) {
    const winner = playRound();
    if (winner === "player") {
      playerCount += 1;
    } else if (winner === "computer") {
      computerCount += 1;
    } else tieCount += 1;
  }
  let topScore = Math.max(playerCount, computerCount);
  if (playerCount === topScore) {
    victor = "player";
  } else victor = "computer";
  if (playerCount != computerCount) {
    console.log(
      `The player won ${playerCount} times, the computer won ${computerCount} 
      times, and the constest ended in a tie ${tieCount} times. The ${victor} 
      wins the game!`
    );
  } else {
    console.log(
      `The player won ${playerCount} times, the computer won ${computerCount} 
      times, and the constest ended in a tie ${tieCount} times. The game ended 
      in a draw!`
    );
  }
}

function promptPlayer() {
  let choice;
  for (let i = 0; i < 3; i++) {
    choice = prompt("Choose rock, paper, or scissors to play:");
    if (choice === null) {
      i = 3;
    } else if (
      choice.toLowerCase() === "rock" ||
      choice.toLowerCase() === "paper" ||
      choice.toLowerCase() === "scissors"
    ) {
      return choice.toLowerCase();
    } else if (i < 2) {
      alert(
        `${choice} is not an option. You have ${2 - i} attempts remaining.`
      );
    } else {
      alert(
        "You have run out of attempts. A choice will be made for you at random."
      );
      let randomNum = Math.floor(Math.random() * 3);
      if (randomNum === 0) {
        return "rock";
      } else if (randomNum === 1) {
        return "paper";
      } else return "scissors";
    }
  }
}

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else return "scissors";
}

function playRound() {
  const playerChoice = promptPlayer();
  const computerChoice = computerPlay();

  if (playerChoice == undefined) {
    console.log("Round Canceled");
  } else {
    console.log(
      `The player chose ${playerChoice}, and the c
      omputer chose ${computerChoice}`
    );
    if (computerChoice === playerChoice) {
      console.log("Tie!");
      return "tie";
    } else if (playerChoice === "rock" && computerChoice != "paper") {
      console.log(
        `You win! ${capitalizeFirstLetter(
          playerChoice
        )} beats ${computerChoice}.`
      );
      return "player";
    } else if (playerChoice === "paper" && computerChoice != "scissors") {
      console.log(
        `You win! ${capitalizeFirstLetter(
          playerChoice
        )} beats ${computerChoice}.`
      );
      return "player";
    } else if (playerChoice === "scissors" && computerChoice != "rock") {
      console.log(
        `You win! ${capitalizeFirstLetter(
          playerChoice
        )} beats ${computerChoice}.`
      );
      return "player";
    } else
      console.log(
        `You Lose! ${capitalizeFirstLetter(
          computerChoice
        )} beats ${playerChoice}.`
      );
    return "computer";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
