// This controller essentially ties everything together. It has the following functions:
// - init (initializes the game) =>
//     - takes old state and displays It
//     - adds event listeners to the board dislay
//     - adds event listeners to the drop-down menu

class Controller{
    constructor(){
        this.#enableDropdown();
        this.#init();

    }

    #init(){
        
    }

    #enableDropdown() {
        const actions = document.querySelector('#actions');
        const reset = document.querySelector('#reset');
        const newGame = document.querySelector('#new-game');
        const e = [actions, reset, newGame];

        function toggleDropdown(e) {
            e.forEach((e) => {
                e.classList.toggle('show');
            });
        }

        actions.addEventListener('click', () => {
            toggleDropdown(e);
        });

        reset.addEventListener('click', () => {
            toggleDropdown(e);
            resetGame();
        });

        newGame.addEventListener('click', () => {
            toggleDropdown(e);
            newGame();
        });
    }
}