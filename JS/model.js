// This is the Model class, if controls the game itself, it has the following functions:
// - checkWin (checks if the game is over)
// - checkDraw (checks if the game is a draw)
// - lastPlayer (returns the last player)
// - saveState (saves the current state of the board and scores)
// - resetBoard (resets the board)
// - resetAll (resets everything)

// It also has the following properties, that will be needed by the View and Controller:
// - board (the board itself)
// - p1Score (player 1 score)
// - p2Score (player 2 score)
// - drawCount (draw count)


export default class Model {
    constructor() {
        this.board = localStorage.getItem('board') ? JSON.parse(localStorage.getItem('board')) : ['', '', '', '', '', '', '', '', ''];
        this.p1Score = localStorage.getItem('p1-win-count') ? JSON.parse(localStorage.getItem('p1Score')) : 0;
        this.p2Score = localStorage.getItem('p2-win-count') ? JSON.parse(localStorage.getItem('p2Score')) : 0;
        this.drawCount = localStorage.getItem('draw-count') ? JSON.parse(localStorage.getItem('winner')) : '';

        this.winner = this.checkWin(this.board);
        this.draw = this.checkDraw(this.board);
        this.gameOver = this.win || this.draw;
        this.lastPlayer = this.lastPlayer(board);
    }

    lastPlayer(board) {
        const lastPlayer = (board.filter(cell => cell !== '').length);
        return lastPlayer % 2 === 0 ? 'X' : 'O';
    }

    // The board is a 1D array of 9 elements:
    //   [0,1,2,
    //    3,4,5,
    //    6,7,8]
    checkWin(board) {
        // check rows
        for (let i = 0; i < 9; i += 3) {
            if (board[i] !== '' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
                return board[i];
            }
        }
        // check columns
        for (let i = 0; i < 3; i++) {
            if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
                return board[i];
            }
        }
        // check diagonals
        if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
            return board[0];
        }
        if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
            return board[2];
        }
        return '';
    }

    checkDraw(board) {
        return board.filter(cell => cell === '').length === 0;
    }

    saveState() {
        localStorage.setItem('board', JSON.stringify(this.board));
        localStorage.setItem('p1-win-count', JSON.stringify(this.p1Score));
        localStorage.setItem('p2-win-count', JSON.stringify(this.p2Score));
        localStorage.setItem('draw-count', JSON.stringify(this.drawCount));
    }

    resetBoard() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.winner = false;
        this.draw = false;
        this.gameOver = false;
        this.lastPlayer = 2;
    }

    resetScore() {
        this.resetBoard();
        this.p1Score = 0;
        this.p2Score = 0;
        this.drawCount = 0;
        this.saveState();
    }
}