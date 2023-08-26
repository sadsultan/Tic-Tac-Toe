import Model from "./store.js";
import View from "./view.js";

function init() {
    const model = new Model;
    const view = new View(model.data);

    model.addEventListener('dataChange', () => {
        view.loadGame(model.data);
    });

    window.addEventListener('storage', () => {
        view.loadGame(model.data);
    });

    view.$.boardSquares.forEach(square => {
        square.addEventListener('click', () => {
            model.move(+square.id)
        });
    });

    view.$.newGameBtn.addEventListener('click', () => {
        model.newGame();
    });

    view.$.winnerDisplayBtn.addEventListener('click', () => {
        model.newGame();
        view.$.backCover.classList.remove('cover');
    });

    view.$.resetGameBtn.addEventListener('click', () => {
        model.data = model.defaultData;
    });
}

window.addEventListener('load', init);