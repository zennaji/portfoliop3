import Player from "./Player.js";

/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */
// lege array makeen
const players = [];
let currentPlayer = 0; // This is the index of the array of the currentplayer
//selecteren
const fields = document.querySelectorAll(".board > .field");
const resetButton = document.querySelector(".reset-btn");

// span selecteren
const playerLabelOne = document.querySelector(".pl-lb1");
const playerLabelTwo = document.querySelector(".pl-lb2");
const symboleLabelOne = document.querySelector(".syb-lb1");
const symboleLabeTwo = document.querySelector(".syb-lb2");
const gameStatus = document.querySelector(".game-status");

//Create two players aligned with the Player class
const playerOne = new Player("Zakaria", "X");
const playerTwo = new Player("Alaa", "O");
//Add both players to the players array
players.push(playerOne);
players.push(playerTwo);
// textContent veranderen
playerLabelOne.textContent = players[0].name;
playerLabelTwo.textContent = players[1].name;
symboleLabelOne.textContent = players[0].symbol;
symboleLabeTwo.textContent = players[1].symbol;

// Maken van een loop en doorde hele vakken gaan een click click event toevoegen.

for (let i = 0; i < fields.length; i++) {
  console.log(fields[i]);
  fields[i].addEventListener("click", function () {
    // addSymbolToField function verbinden met de eventHandler
    addSymbolToField(this);
    checkWinner();
  });
}

resetButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", status);

function addSymbolToField(field) {
  const fieldContent = field.textContent;
  if (fieldContent === "X" || fieldContent === "O") {
    alert("This field can not be used");
  }

  // de huidige player symbol toevogen aan de textContent van de field
  field.textContent = players[currentPlayer].symbol;

  console.log();
  currentPlayer++;

  if (currentPlayer > 1) {
    currentPlayer = 0;
  }
}
// controleren van de winningsregels aan de hand van het maken van een array met indexes
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWinner() {
  /**
   * Assignment
   * Add an algorithm to check if someone has three in a row
   * Try to use Internet - if not found the teacher will give you one
   * Also make sure you check for a draw (gelijkspel)
   * Again what more needs to be done, make a short todolist
   */
  //
  for (let i = 0; i < winningConditions.length; i++) {
    const winline = winningConditions[i];
    let winX = true;
    let winO = true;
    for (let j = 0; j < winline.length; j++) {
      const fieldIndex = winline[j];
      const field = fields[fieldIndex].textContent.toLowerCase();
      if (field === "x") {
        winO = false;
      } else if (field === "o") {
        winX = false;
      } else {
        winO = winX = false;
      }
    }
    if (winX) {
      alert("X IS winner");
      addPointsPlayerOne();
      gameStatus.textContent = "";
      const p = document.createElement("p");
      p.textContent +=
        players[0].name +
        " " +
        players[0].symbol +
        " " +
        "Win!" +
        " " +
        "score of player " +
        players[0].getPoints();
      gameStatus.append(p);
      setTimeout(resetGame, 2000);
      status();
    } else if (winO) {
      alert("O Is winner");
      addPointsPlayerTwo();
      gameStatus.textContent += "";
      const p = document.createElement("p");
      p.textContent +=
        players[1].name +
        " " +
        players[1].symbol +
        " " +
        "Win!" +
        " " +
        "score of player " +
        players[1].getPoints();
      gameStatus.append(p);
      setTimeout(resetGame, 2000);
      status();
    } else if (
      (fields[0].textContent == "X" || fields[0].textContent == "O") &&
      (fields[1].textContent == "X" || fields[1].textContent == "O") &&
      (fields[2].textContent == "X" || fields[2].textContent == "O") &&
      (fields[3].textContent == "X" || fields[3].textContent == "O") &&
      (fields[4].textContent == "X" || fields[4].textContent == "O") &&
      (fields[5].textContent == "X" || fields[5].textContent == "O") &&
      (fields[6].textContent == "X" || fields[6].textContent == "O") &&
      (fields[7].textContent == "X" || fields[7].textContent == "O") &&
      (fields[8].textContent == "X" || fields[8].textContent == "O")
    ) {
      gameStatus.textContent = "";
      const p = document.createElement("p");
      p.textContent = "Draw";
      gameStatus.append(p);
      setTimeout(resetGame, 2000);
      status();
    }
  }
}

function resetGame() {
  /**
   * Assignment
   * Make sure this works (all fields empty, reset data if needed)
   */
  for (let i = 0; i < fields.length; i++) {
    fields[i].textContent = "";
  }
}
function status() {
  setTimeout(function () {
    gameStatus.textContent = "";
  }, 10000);
}
function addPointsPlayerOne() {
  console.log(" score of player 1");
  players[0].addPoints();
}
function addPointsPlayerTwo() {
  console.log(" score of player 2");
  players[1].addPoints();
}
console.log("File loaded");
