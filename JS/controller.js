import View from "./view.js";
import Model from "./store.js";

// This controller essentially ties everything together. It has the following functions:
// - init (initializes the game) =>
//     - takes old state and displays It
//     - adds event listeners to the board dislay
//     - adds event listeners to the drop-down menu
class App {
    constructor() {
        this.model = new Model;
        this.view = new View(this.model.$);
        this.#addDropDown();
        this.#addBoardListeners();
    }

    #addDropDown() {

    }

    #addBoardListeners() {

    }
}

new App();