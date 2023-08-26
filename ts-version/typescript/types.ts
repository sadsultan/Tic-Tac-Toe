type gameData = {
    'winner': number,
    'isDraw': boolean,
    'turn': number,
    'board': gameBoard,
    'p1Score': number,
    'p2Score': number,
    'drawCount': number
}

type gameBoard = number[];