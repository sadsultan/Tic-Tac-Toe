// This is the View class, it has the following functions:
// - enableDropdown (Might be a better fit for controller)
// - setPlayer (Called automatically, pass in stored player value in storge)
// - updateCount (Updates the display of wins and draws, needs to be called)
// - togglePlayer (call once and it will change the playerdisplay to the opposite one)
// - displayBoard (takes the time to update the board, call it every turn)
// - resetGame (resets all the displays on the board, call it when the game is over)
// - resetAll (resets everything, call it when the game is over)
// - gameOver (displays the winner and calls resetGame)

export default class View { 
    emptyBoard = ['','','','','','','','',''];
    counts = ['p1-win-count','p2-win-count','draw-count'];

    constructor(player, board=emptyBoard, p1_win_count=0, p2_win_count=0, draw_count=0){
        this.#countValues = [p1_win_count, p2_win_count, draw_count]
        for (let i = 0; i < counts.length; i++) {
            this.updateCount(this.count[i], this.#countValues[i]);
        }

        this.#setPlayer(player);
        this.displayBoard(board);
    }

    #setPlayer(player) {
        const player = document.getElementById(`player-${player}`);
        player.classList.toggle('hidden');
    }

    updateCount(countId, count) {
        const count = document.getElementById(countId);
        count.innerText = count;
    }

    togglePlayer() {
        const player1 = document.querySelector('#player-1');
        const player2 = document.querySelector('#player-2');
        
        player1.toggle('hidden');
        player2.toggle('hidden');
    }

    displayBoard(board) {
        for (let i = 0; i < board.length; i++) {
            const cell = document.getElementById(`${i}`);
            cell.innerText = board[i];
        }
    }

    gameOver(winner) {
        const winnerDisplay = document.createElement('div');
        winnerDisplay.classList.add('winner-display');
        winnerDisplay.id = 'winner-display';

        const winnerMessage = document.createElement('p');
        winnerMessage.innerText = `COngratulations to Player ${winner} for the win!!`;

        const resetButton = document.createElement('button');
        resetButton.innerText = 'Reset Game';
        resetButton.id = 'reset-game';

        winnerDisplay.appendChild(winnerMessage);
        winnerDisplay.appendChild(resetButton);
        document.body.appendChild(winnerDisplay);
    }

    resetGame() {
        this.#setPlayer(1);
        this.displayBoard(this.emptyBoard);
    }

    resetAll() {
        this.resetGame();
        for (let i = 0; i < counts.length; i++) {
            this.updateCount(this.count[i], 0);
        }
    }
}