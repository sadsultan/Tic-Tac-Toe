// This is the View class, it has the following functions:
// - enableDropdown (Might be a better fit for controller)
// - setPlayer (Called automatically, pass in stored player value in storge)
// - updateCount (Updates the display of wins and draws, needs to be called)
// - togglePlayer (call once and it will change the playerdisplay to the opposite one)
// - displayBoard (takes the time to update the board, call it every turn)
// - resetGame (resets all the displays on the board, call it when the game is over)


// #enableDropdown() {
//         const actions = document.querySelector('#actions');
//         const reset = document.querySelector('#reset');
//         const newGame = document.querySelector('#new-game');
//         const e = [actions, reset, newGame];

//         function toggleDropdown(e) {
//             e.forEach((e) => {
//                 e.classList.toggle('show');
//             });
//         }

//         actions.addEventListener('click', () => {
//             toggleDropdown(e);
//         });

//         reset.addEventListener('click', () => {
//             toggleDropdown(e);
//             resetGame();
//         });

//         newGame.addEventListener('click', () => {
//             toggleDropdown(e);
//             newGame();
//         });
//     }

export default class View { 
    emptyBoard = ['','','','','','','','',''];
    counts = ['p1-win-count','p2-win-count','draw-count'];
    constructor(player, board=emptyBoard, p1_win_count=0, p2_win_count=0, draw_count=0){
        this.#countValues = [p1_win_count, p2_win_count, draw_count]

        this.#setPlayer(player);

        for (let i = 0; i < counts.length; i++) {
            this.updateCount(this.count[i], this.#countValues[i]);
        }

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

    resetGame() {
        this.#setPlayer(1);
        this.displayBoard(this.emptyBoard);
    }
}