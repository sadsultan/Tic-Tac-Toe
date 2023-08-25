export default class View {
    $ = {
        winnerDisplayMsg: this.#qs('#winner-display > p'),
        winnerDisplayBtn: this.#qs('#winner-display > button'),
        backCover: this.#qs('#cover'),
        p1TurnIndicator: this.#qs('#player-1'),
        p2TurnIndicator: this.#qs('#player-2'),
        boardSquares: this.#qsAll('[data-id=board-square]'),
        p1Score: this.#qs('#p1-win-count'),
        p2Score: this.#qs('#p2-win-count'),
        drawCount: this.#qs('#draw-count'),
        dropDownItems: this.#qsAll('.drop-down-item'),
        resetGameBtn: this.#qs('#reset'),
        newGameBtn: this.#qs('#new-game')
    }

    constructor (prevData) {
        this.loadGame(prevData);
        this.#dropDownToggle();
    }

    loadGame (data) {       
        this.setPlayer(data.turn);
        this.setBoard(data.board);
        this.setScoreDisplay(data.p1Score, data.p2Score, data.drawCount);
        if (data.winner) this.setWinnerDisplay(data.winner);
        else if (data.isDraw) this.setDrawDisplay();
    }

    #dropDownToggle () {
        this.$.dropDownItems.forEach( item => {
            item.addEventListener('click', () => {
                this.$.dropDownItems.forEach( item => item.classList.toggle('show'));
            });
        });
    }

    setPlayer (player) {
        if (player === 1) {
            this.$.p1TurnIndicator.classList.remove('hidden');
            this.$.p2TurnIndicator.classList.add('hidden');
        } else {
            this.$.p1TurnIndicator.classList.add('hidden');
            this.$.p2TurnIndicator.classList.remove('hidden');
        }
    }

    setBoard (board) {
        if (board.length !== 9) throw new Error('Invalid board!!');

        for(let i = 0; i < board.length; i++) {
            if (board[i] === 0) {
                this.$.boardSquares[i].innerText = '';
                this.$.boardSquares[i].classList.remove('player-1', 'player-2');
            } else {
                this.$.boardSquares[i].classList.add(`player-${board[i]}`);
                this.$.boardSquares[i].innerText = board[i] === 1? 'X' : 'O';
            } 
        }
    }

    setScoreDisplay (p1Score, p2Score, drawCount) {
        this.$.p1Score.innerText = p1Score;
        this.$.p2Score.innerText = p2Score;
        this.$.drawCount.innerText = drawCount;
    }

    showModal () {
        this.$.backCover.classList.add('cover');
    }

    setDrawDisplay () {
        this.$.winnerDisplayMsg.innerText = "OH NO! It's a draw! :(";
        this.showModal();
    }

    setWinnerDisplay (winner) {
        this.$.winnerDisplayMsg.innerText = `Congratulations Player ${winner}! You win!!`
        this.showModal();
    }

    #qs (selector) {
        const element = document.querySelector(selector);
        if (element) return element;
        else throw new Error(`Selector ${selector} not found`);
    }

    #qsAll (selector) {
        const elements = document.querySelectorAll(selector);
        if (elements) return elements;
        else throw new Error(`Selector ${selector} not found`);
    }
}