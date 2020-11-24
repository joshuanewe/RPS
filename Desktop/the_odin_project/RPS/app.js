// accept user input
// - convert response to lowercase
//  -check for false answers

//    generate a random choice for the computer
//       compare computer vs user.
//          declare winner - exit

const computerPlay = () => {
  let computerChoice = Math.floor(Math.random() * Math.floor(3));
  const choices = ["rock", "paper", "scissors"];
  return choices[computerChoice];
};

const userPlay = () => {
  let userChoice = prompt("Make your move! (rock, paper, scissors)");
  userChoice = userChoice.toLowerCase();
  return userChoice;
};

const playRound = (playerSelection, computerSelection) => {
  // your code here

  // rock
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "tie";
      //reroll
    } else if (computerSelection === "paper") {
      return "cpu win";
    } else if (computerSelection === "scissors") {
      return "user win";
    }
  }

  // paper
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "user win";
      //reroll
    } else if (computerSelection === "paper") {
      return "tie";
    } else if (computerSelection === "scissors") {
      return "cpu win";
    }
  }

  // scissors
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "cpu win";
      //reroll
    } else if (computerSelection === "paper") {
      return "user win";
    } else if (computerSelection === "scissors") {
      return "tie";
    }
  }
};

const startGame = () => {
  let userScore = 0;
  let cpuScore = 0;
  let roundOutcome;
  for (i = 1; i <= 5; i++) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    roundOutcome = playRound(playerSelection, computerSelection);
    if (roundOutcome === "user win") {
      console.log("USER score!");
      userScore++;
    } else if (roundOutcome === "cpu win") {
      console.log("CPU score!");
      cpuScore++;
    } else {
      console.log("Tie round! No score!");
    }
  }
  console.log(`Final score ${userScore} to ${cpuScore}`);
  if (userScore > cpuScore) {
    console.log("YOU WON!");
  } else if (userScore < cpuScore) {
    console.log("YOU LOST :(");
  } else {
    console.log("TIE GAME");
  }
};

startGame();
// console.log(playRound(playerSelection, computerSelection));
// console.log(playerSelection, computerSelection);
