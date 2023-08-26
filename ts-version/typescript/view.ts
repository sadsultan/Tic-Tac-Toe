export default class View {
    $:Record<string, Element> = {
        winnerDisplayMsg: this.#qs('#winner-display > p'),
        winnerDisplayBtn: this.#qs('#winner-display > button'),
        backCover: this.#qs('#cover'),
        p1TurnIndicator: this.#qs('#player-1'),
        p2TurnIndicator: this.#qs('#player-2'),
        p1Score: this.#qs('#p1-win-count'),
        p2Score: this.#qs('#p2-win-count'),
        drawCount: this.#qs('#draw-count'),
        resetGameBtn: this.#qs('#reset'),
        newGameBtn: this.#qs('#new-game')
    }

    $$:Record<string, NodeListOf<Element>> = {
        boardSquares: this.#qsAll('[data-id=board-square]'),
        dropDownItems: this.#qsAll('.drop-down-item')
    }

    constructor(prevData : gameData) {
        this.loadGame(prevData);
        this.#dropDownToggle();
    }

    loadGame(data : gameData) {
        this.setPlayer(data.turn);
        this.setBoard(data.board);
        this.setScoreDisplay(data.p1Score, data.p2Score, data.drawCount);
        if (data.winner) this.setWinnerDisplay(data.winner);
        else if (data.isDraw) this.setDrawDisplay();
    }

    #dropDownToggle() {
        this.$$.dropDownItems.forEach(item => {
            item.addEventListener('click', () => {
                this.$$.dropDownItems.forEach(item => item.classList.toggle('show'));
            });
        });
    }

    setPlayer(player : number) {
        if (player === 1) {
            this.$.p1TurnIndicator.classList.remove('hidden');
            this.$.p2TurnIndicator.classList.add('hidden');
        } else {
            this.$.p1TurnIndicator.classList.add('hidden');
            this.$.p2TurnIndicator.classList.remove('hidden');
        }
    }

    setBoard(board : gameBoard) {
        if (board.length !== 9) throw new Error('Invalid board!!');

        for (let i = 0; i < board.length; i++) {
            if (board[i] === 0) {
                this.$$.boardSquares[i].textContent = '';
                this.$$.boardSquares[i].classList.remove('player-1', 'player-2');
            } else {
                this.$$.boardSquares[i].classList.add(`player-${board[i]}`);
                this.$$.boardSquares[i].textContent = board[i] === 1 ? 'X' : 'O';
            }
        }
    }

    setScoreDisplay(p1Score : number, p2Score : number, drawCount : number) {
        this.$.p1Score.textContent = `${p1Score}`;
        this.$.p2Score.textContent = `${p2Score}`;
        this.$.drawCount.textContent = `${drawCount}`;
    }

    showModal() {
        this.$.backCover.classList.add('cover');
    }

    setDrawDisplay() {
        this.$.winnerDisplayMsg.textContent = "OH NO! It's a draw! :(";
        this.showModal();
    }

    setWinnerDisplay(winner : number) {
        this.$.winnerDisplayMsg.textContent = `Congratulations Player ${winner}! You win!!`
        this.showModal();
    }

    #qs(selector : string) {
        const element = document.querySelector(selector);
        if (element) return element;
        else throw new Error(`Selector ${selector} not found`);
    }

    #qsAll(selector : string) {
        const elements = document.querySelectorAll(selector);
        if (elements) return elements;
        else throw new Error(`Selector ${selector} not found`);
    }
}