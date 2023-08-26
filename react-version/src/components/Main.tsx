import "./Main.css";

export default function Main(){
    return (
        <main>
            <div className="turn-indicator top" id="turn-indicator">
                <p className="hidden player-1" id="player-1"><b>X</b> Player 1 is up</p>
                <p className="hidden player-2" id="player-2"><b>O</b> Player 2 is up</p>
            </div>
            <div className="drop-down-menu top">
                <div className="drop-down-item" id="actions">Actions:</div>
                <div className="drop-down-item" id="reset">Start Next</div>
                <div className="drop-down-item" id="new-game">New Game</div>
            </div>

            <div className="board-square" id="0" data-id="board-square"></div>
            <div className="board-square" id="1" data-id="board-square"></div>
            <div className="board-square" id="2" data-id="board-square"></div>
            <div className="board-square" id="3" data-id="board-square"></div>
            <div className="board-square" id="4" data-id="board-square"></div>
            <div className="board-square" id="5" data-id="board-square"></div>
            <div className="board-square" id="6" data-id="board-square"></div>
            <div className="board-square" id="7" data-id="board-square"></div>
            <div className="board-square" id="8" data-id="board-square"></div>

            <div className="bottom draws">
                <p>Total draws:</p>
                <p id="draw-count">0</p>
            </div>

            <div className="bottom p1-wins">
                <p>Player 1 score:</p>
                <p id="p1-win-count">0</p>
            </div>

            <div className="bottom p2-wins">
                <p>Player 2 score:</p>
                <p id="p2-win-count">0</p>
            </div>
        </main>
    )
}