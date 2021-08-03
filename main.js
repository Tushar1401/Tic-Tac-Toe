import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

// gameView.updateBoard(game);
// console.log(game.board);
// console.log("My turn is ",game.turn);
// game.nextTurn();
// console.log("My turn is ",game.turn);
// game.makeMove(3);
// console.log(game.board);
// game.nextTurn();
// game.makeMove(8);
// gameView.updateBoard(game);

document.querySelector('.restart').addEventListener("click", () => {
    console.log('NEW GAME');
    onRestartClick();
});

let tiles = document.querySelectorAll('.board-tile');
// console.log(tiles);
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        console.log('tile-clicked');
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(idx) {
    // make a move
    // change a turn
    // update board
    game.makeMove(idx);
    gameView.updateBoard(game);
    // game.nextTurn();
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

const gameEndOverlay = document.getElementById('gameEndOverlay');
document.querySelector('#resetButton').addEventListener("click", () => {
    console.log('NEW GAME');
    gameEndOverlay.classList.remove('show');
    game = new Game();
    gameView.updateBoard(game);
});


gameView.updateBoard(game);