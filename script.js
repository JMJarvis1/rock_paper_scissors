"use strict";

for (let i = 0; i < 1; i++) {
  playRound();
}

function promptPlayer() {
  let choice;
  for (let i = 0; i < 3; i++) {
    choice = prompt(
      "Choose rock, paper, or scissors to play or click OK to choose randomly:"
    );
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
      `The player chose ${playerChoice}, and the computer chose ${computerChoice}`
    );
    if (computerChoice === playerChoice) {
      console.log("Tie!");
    } else if (playerChoice === "rock" && computerChoice != "paper") {
      console.log(
        `You win! ${capitalizeFirstLetter(
          playerChoice
        )} beats ${computerChoice}.`
      );
    } else if (playerChoice === "paper" && computerChoice != "scissors") {
      console.log(
        `You win! ${capitalizeFirstLetter(
          playerChoice
        )} beats ${computerChoice}.`
      );
    } else if (playerChoice === "scissors" && computerChoice != "rock") {
      console.log(
        `You win! ${capitalizeFirstLetter(
          playerChoice
        )} beats ${computerChoice}.`
      );
    } else
      console.log(
        `You Lose! ${capitalizeFirstLetter(
          computerChoice
        )} beats ${playerChoice}.`
      );
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
