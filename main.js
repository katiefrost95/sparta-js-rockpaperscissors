var userInput = prompt ("Hello there! Are you ready to play? Pick either rock, paper, or scissors");
var computerInput = Math.floor(Math.random()*3);

console.log(computerInput);
var playerScore = 0;
var computerScore = 0;
var gameCounter = 0;
var firstRound = true;
var comp_pick;

if (computerInput == 0) {
  comp_pick = "rock";
} else if (computerInput == 1) {
  comp_pick = "paper";
} else if (computerInput == 2) {
  comp_pick = "scissors";
} else {
  comp_pick = "wrong";
}


decider(userInput, comp_pick);

function decider (userInput, comp_pick) {
// Loop after first round
  while (playerScore < 5 && computerScore < 5) {
    computerInput = Math.floor(Math.random()*3)
    if (!firstRound) {
    userInput = prompt ("Lets go again, rock, paper, or scissors");
    // computerInput = Math.random ();
    console.log(computerInput);
    if (computerInput == 0) {
      comp_pick = "rock";
    } else if (computerInput == 1) {
      comp_pick = "paper";
    } else if (computerInput == 2) {
      comp_pick = "scissors";
    } else {
      comp_pick = "wrong";
    }
  }
// this is a draw
  if ((comp_pick === "rock" && userInput === "rock") || (userInput === "scissors" && comp_pick=== "scissors") || (userInput === "paper" && comp_pick === "paper")) {
  playerScore = playerScore + 1;
  computerScore = computerScore + 1;
  alert("I chose " + comp_pick + ". We draw! The score is " + playerScore + " / " + computerScore);
}
//This is a win
  else if ((userInput === "rock" && comp_pick === "scissors") || (userInput === "paper" && comp_pick === "rock") || (userInput === "scissors" && comp_pick === "paper")) {
    playerScore = playerScore + 1;
    alert("I chose " + comp_pick + ". You win this time! The score is " + playerScore + " / " + computerScore);
}
//This is a lose
  else if ((userInput === "rock" && comp_pick === "paper") || (userInput === "paper" && comp_pick === "scissors") || (userInput === "scissors" && comp_pick === "rock")) {
    computerScore = computerScore + 1;
    alert("I chose " + comp_pick + ". I win this time! The score is " + playerScore + " / " + computerScore);
}
  else {
    alert("Our results are different, I picked " + comp_pick);
}
firstRound = false;
}
// End Results
  if (computerScore === 5) {
    alert("Haha! I win")
  }
  else {
    alert("Oh Darn! You win")
  }
}
