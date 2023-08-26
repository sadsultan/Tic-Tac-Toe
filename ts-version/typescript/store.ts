export default class Model extends EventTarget {
    constructor() {
        super();
    }

    get defaultData() {
        const defaultData = {
            'winner': 0,
            'isDraw': false,
            'turn': 1,
            'board': [0, 0, 0, 0, 0, 0, 0, 0, 0],
            'p1Score': 0,
            'p2Score': 0,
            'drawCount': 0
        }
        return structuredClone(defaultData);
    }

    get data() {
        const data = JSON.parse(localStorage.getItem('gameData'));
        return data ? structuredClone(data) : this.defaultData;
    }

    set data(data) {
        localStorage.setItem('gameData', JSON.stringify(data));
        this.dispatchEvent(new Event('dataChange'));
    }

    move(index) {
        let data = this.data;
        if (data.board[index]) {
            alert('Invalid move!');
            return;
        }
        data.board[index] = data.turn;
        data.turn = data.turn === 1 ? 2 : 1;
        data.winner = this.checkWin(data.board);
        if (data.winner) {
            data[`p${data.winner}Score`]++;
        } else if (this.checkDraw(data.board)) {
            data.isDraw = true;
            data.drawCount++;
        }
        this.data = data;
    }

    newGame() {
        let data = this.defaultData;
        data.p1Score = this.data.p1Score;
        data.p2Score = this.data.p2Score;
        data.drawCount = this.data.drawCount;
        this.data = data;
    }

    checkWin(board) {
        // check for horizontal wins
        for (let i = 0; i < 9; i += 3) {
            if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
                return board[i];
            }
        }
        // check for vertical wins
        for (let i = 0; i < 3; i++) {
            if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
                return board[i];
            }
        }
        // check for diagonal wins
        if (board[0] && board[0] === board[4] && board[0] === board[8]) {
            return board[0];
        }
        if (board[2] && board[2] === board[4] && board[2] === board[6]) {
            return board[2];
        }
        return 0;
    }

    checkDraw(board) {
        return board.every(cell => cell);
    }
}

