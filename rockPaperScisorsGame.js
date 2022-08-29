// User choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("Please choose from rock, paper, or scissors. Try again!");
  }
};

// Assigns random choice for computer
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Function checks who won the game
const determineWinner = (userChoice, computerChoice) => {
  // Cheat to win game
  if (userChoice === "bomb") {
    return "User has won!";
  }
  // Checks for a tie in the game
  if (userChoice === computerChoice) {
    return "tie";
  }
  // Checks againg user rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer has won!";
    } else {
      return "User has won!";
    }
  }
  // Checks against user paper
  if (userChoice === "paper") {
    if (computerChoice === "scissors" || computerChoice === "rock") {
      return "Computer had won!";
    } else {
      return "User has won!";
    }
  }
  // Checks against user scissors
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer has won!";
    } else {
      return "User has won!";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
