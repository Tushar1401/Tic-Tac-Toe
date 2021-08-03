export default class GameView {

    constructor() {
        // console.log('Init Game View');
    }

    updateBoard(game) {
        // console.log('This is a board within Game');
        // console.log(game.board);
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();

        let count = 0;

        for (let i = 0; i < game.board.length; i++) {
            // console.log(game.board[i]);
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            // console.log(tile);
            // tile.textContent = game.board[i];
            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`;
            tile.classList.remove("tile-winner");

            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("tile-winner");
                this.endGame(game.turn);
            }

            // console.log('board[i]', game.board[i]);

            if (game.board[i]) {
                count++;
            }

            // if (i == game.board.length - 1) {
            //     console.log('winning combination', winningCombination);
            // }
        }
        console.log('count--', count);
        if (count == 9) {
            // console.log('winning combination', winningCombination);
            this.endGame();
            count = 0;
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector('.player-x');
        let playerO = document.querySelector('.player-o');
        // console.log(playerX);
        // console.log(playerO);
        playerX.classList.remove('active');
        playerO.classList.remove('active');

        if (game.turn == "X") {
            playerX.classList.add('active');
        } else {
            playerO.classList.add('active');
        }
    }

    endGame(winner) {
        // const resetButton = document.getElementById('resetButton');
        const gameEndOverlay = document.getElementById('gameEndOverlay');

        const winningMessage = document.querySelector('[data-winning-message]');
        const winningMessageText = document.querySelector('[data-winning-message] h1 span');
        const draw = document.querySelector('[data-winning-message] h1');
        const img = document.querySelector('img');

        console.log(winningMessageText.innerText);

        // if (draw) {
        //     winningMessageText.innerText = `draw!`;
        // } else {
        //     winningMessageImg.src = unicornTurn ? 'https://assets.codepen.io/2558758/unicorn.png' : 'https://assets.codepen.io/2558758/dragon.png';
        //     winningMessageImg.alt = unicornTurn ? 'unicorn' : 'dragon';
        //     winningMessage.insertBefore(winningMessageImg, winningMessageText);
        //     winningMessageText.innerText = `wins!!!`
        // }

        console.log("winner --- ", winner);
        if (winner == 'X') {
            img.src = './img/winner-blue.svg';
            if (winningMessageText != null) {
                winningMessageText.innerText = `BLUE`;
            }
            winningMessageText.classList.remove("tile-o");
            winningMessageText.classList.add("tile-x");
        } else if (winner == 'O') {
            img.src = '';
            img.src = './img/winner-purple.svg';
            if (winningMessageText != null) {
                winningMessageText.innerText = `PURPLE`;
            }
            // winningMessageText.classList.remove(".tile-o");
            winningMessageText.classList.remove("tile-x");
            winningMessageText.classList.add("tile-o");
        } else {
            img.src = '';
            img.src = './img/draw.svg';
            draw.innerText = ``;
            draw.innerText = `Draw!`;
            draw.classList.add("red");
        }

        gameEndOverlay.classList.add('show');
        // resetButton.addEventListener( 'click', startGame );
        // console.log('hello');
    }
}