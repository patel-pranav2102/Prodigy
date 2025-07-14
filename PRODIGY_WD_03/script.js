const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const modeToggle = document.getElementById("modeToggle");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let playVsAI = false;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e) {
  const index = e.target.dataset.index;
  if (board[index] !== "" || !gameActive) return;

  makeMove(index, currentPlayer);

  if (!gameActive || !playVsAI || currentPlayer === "X") return;

  // Let AI make a move after small delay
  setTimeout(() => {
    const aiMove = getBestAIMove();
    if (aiMove !== -1) makeMove(aiMove, "O");
  }, 300);
}

function makeMove(index, player) {
  board[index] = player;
  cells[index].textContent = player;

  if (checkWin(player)) {
    statusText.textContent = `Player ${player} wins!`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = player === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function getBestAIMove() {
  const available = board.map((v, i) => (v === "" ? i : null)).filter(i => i !== null);
  return available[Math.floor(Math.random() * available.length)];
}

function checkWin(player) {
  return winningCombinations.some(combination =>
    combination.every(index => board[index] === player)
  );
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
}

function toggleMode() {
  playVsAI = !playVsAI;
  modeToggle.textContent = `Play vs AI: ${playVsAI ? "ON" : "OFF"}`;
  restartGame();
}
