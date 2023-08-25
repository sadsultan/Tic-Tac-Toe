const defaultData = {
        winner: null,
        turn: 1,
        board: [ 0, 0, 0, 0, 0, 0, 0, 0, 0],
        p1Score: 0,
        p2Score: 0,
        drawCount: 0
    }

export default class Model extends EventTarget {
    constructor () {
        super();

        this.data = this.getData();
    }

    getData(...keys){
        let data = {};
        if (keys.length > 0) {
            keys.forEach(key => {
                const value = JSON.parse(localStorage.getItem(key));

                data[key] = value? value : this.defaultData[key];
            });
            return data;
        } 
        return defaultData;
    }

    setData(key, value){
        if (key && value) localStorage.setItem(key, JSON.stringify(value));
        else throw new Error('Invalid key or value');
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

