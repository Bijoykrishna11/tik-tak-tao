let currentPlayer = "X";
let gameEnded = false;
let board = Array(9).fill("");

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function placeSymbol(index) {
  if (!gameEnded && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      document.getElementById("message").textContent = `Player ${currentPlayer} wins!`;
      gameEnded = true;
      break;
    }
  }

  if (!gameEnded && board.every((cell) => cell !== "")) {
    document.getElementById("message").textContent = "It's a draw!";
    gameEnded = true;
  }
}

function resetBoard() {
  board = Array(9).fill("");
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  document.getElementById("message").textContent = "";
  currentPlayer = "X";
  gameEnded = false;
}
