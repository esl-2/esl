const game = document.getElementById('game');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function createBoard() {
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.setAttribute('data-index', index);
        cellElement.innerText = cell;
        cellElement.addEventListener('click', handleCellClick);
        game.appendChild(cellElement);
    });
}

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');
    if (board[index] !== '' || !isGameActive) return;

    board[index] = currentPlayer;
    event.target.innerText = currentPlayer;
    checkResult();
}

function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') continue;
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        status.innerText = `Player ${currentPlayer} has won!`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        status.innerText = 'It\'s a draw!';
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.innerText = `Current Player: ${currentPlayer}`;
}

resetButton.addEventListener('click', resetGame);

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    status.innerText = `Current Player: ${currentPlayer}`;
    game.innerHTML = '';
    createBoard();
}

createBoard();
status.innerText = `Current Player: ${currentPlayer}`;
