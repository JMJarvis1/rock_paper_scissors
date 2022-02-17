Rock, Paper, Scissors

Loop game five times
{
playRound;
}

Function: Generate computer choice
use random number between 1 & 3 to make choice
0: rock
1: paper
2: scissors

Function:Prompt user for choice
-change to lowercase
-(while loop)
check if rock, paper, or scissors
Compare user choice with computer choice and determine winner.

Function: playRound()
consts: playerChoice,
computerChoice;

    promptPlayer();
    computerPlay();

/_ switch (choice) {
case choice === "rock" || choice === "paper" || choice === "scissors":
break;
case i <= 4:
alert(
`${choice} is not an option. You have ${4 - i} attempts remaining.`
);
break;
} _/
