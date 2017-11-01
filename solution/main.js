// Get input

function getUserInput() {
  return prompt("Please chose either 'rock', 'paper', or 'scissors'.");
}

// Get the player move
function getPlayerMove () {
  return getUserInput ();
}

// Random play for computer
function randomPlay () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}


// Get the computer move

// Will need to play five

// Check for a winner
