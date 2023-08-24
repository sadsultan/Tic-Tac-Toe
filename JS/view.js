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

    constructor($){
        this.countValues = [$.p1Score, $.p2Score, $.drawCount]
        for (let i = 0; i < this.counts.length; i++) {
            this.updateCount(this.counts[i], this.countValues[i]);
        }

        this.setPlayer($.nextPlayer);
        this.displayBoard($.board);

        if ($.gameOver){
            this.gameOver($.winner, $.isDraw);
        }
    }

    setPlayer(player) {
        const playerMessage = document.getElementById('player-' + player);
        playerMessage.classList.toggle('hidden');
    }

    updateCount(countId, count) {
        const countDisplay = document.getElementById(countId);
        countDisplay.innerText = count;
    }

    togglePlayer() {
        const player1 = document.querySelector('#player-1');
        const player2 = document.querySelector('#player-2');
        
        player1.classList.toggle('hidden');
        player2.classList.toggle('hidden');
    }

    displayBoard(board) {
        for (let i = 0; i < board.length; i++) {
            const cell = document.getElementById(`${i}`);
            cell.innerText = board[i];
        }
    }

    gameOver(winner=0, draw=false) {
        const winnerDisplay = document.createElement('div');
        winnerDisplay.classList.add('winner-display');
        winnerDisplay.id = 'winner-display';

        const winnerMessage = document.createElement('p');
        if (draw) {
            winnerMessage.innerText = 'There were no winners, this is a draw :(';
        } else {
            winnerMessage.innerText = `Congratulations to Player ${winner} for the win!!`;
        }

        const resetButton = document.createElement('button');
        resetButton.innerText = 'Reset Game';
        resetButton.id = 'reset-game';

        winnerDisplay.appendChild(winnerMessage);
        winnerDisplay.appendChild(resetButton);
        document.body.appendChild(winnerDisplay);
    }

    resetGame() {
        this.setPlayer(1);
        this.displayBoard(this.emptyBoard);
    }

    resetAll() {
        this.resetGame();
        for (let i = 0; i < counts.length; i++) {
            this.updateCount(this.count[i], 0);
        }
    }
}