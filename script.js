const playerScore = document.getElementById("score-user");
const computerScore = document.getElementById("score-computer");
const choiceBtns = document.querySelectorAll(".choice-btn");

let playerChoice = document.getElementById("player-choice");
let computerChoice = document.getElementById("computer-choice");
let player;
let computer;
let result;
let playerPoint = 0;
let computerPoint = 0;

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    player = e.target.value;
    playerChoice.innerHTML = player;
    computer = computerTurn();
    result = checkWinner(player, computer);
    incrementPlayerScore(result);
  });
});

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
  computerChoice.innerHTML = computer;
  return computer;
}

function checkWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result = "Draw";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      result = "you win";
    } else {
      result = "computer wins";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      result = "you win";
    } else {
      result = "computer wins";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      result = "you win";
    } else {
      result = "computer wins";
    }
  }
  return result;
}

function incrementPlayerScore(winner) {
  if (winner === "you win") {
    playerPoint++;
    playerScore.innerHTML = playerPoint;
  } else if (winner === "computer wins") {
    computerPoint++;
    computerScore.innerHTML = computerPoint;
  }
}
