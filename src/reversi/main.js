import { Player } from './player.js';
import { Grid } from './board/grid.js';
import { Inspector } from './inspector/inspector.js';
import { Turn } from './controlTurn.js';
import { GameOver } from './gameOverCoditions.js';
import promptSync from 'prompt-sync';

const Player1 =  new Player('B');
const Player2 =  new Player('W');
const prompt = promptSync();
const grid = new Grid();
var board = grid.gridInit();
var inspector = new Inspector();
var isGameOver = new GameOver();
var isTurn = new Turn();

var newToken;
var positinonsToflip = 0;
var verifiedPositions = 0;
var availablePositions;
var players = [Player1, Player2];
var currentPlayer = players[0];
var gameOver = false;
var thereAreZeroTokens = false;
var thereAreZeroMoves =  false;

console.log(grid.displayBoard(board));

while (gameOver == false) {
    verifiedPositions  = inspector.checkPossiblePositions(board, currentPlayer.playerTag);
    console.clear();
    console.log(grid.displayBoard(board));//display the new token
    console.log (' Turn Left to B: ', players[0].tokenCount, '\n', 'Turn Left to W: ', players[1].tokenCount); // Borrar
    console.log(verifiedPositions);
    console.log('It is player ' + currentPlayer.playerTag + ' turn');
    var rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    var columnCoordinate = parseInt(prompt('Enter the column coordinate '));

    newToken = currentPlayer.setToken(rowCoordinate, columnCoordinate);
    availablePositions = inspector.validatePosition(newToken, verifiedPositions);

    if (availablePositions == true) {
        currentPlayer.discount();
        board[newToken[0]][newToken[1]] = currentPlayer.playerTag;//place a token on board

        console.clear();
        positinonsToflip = inspector.checkMatchesToFlip(newToken, board, currentPlayer.playerTag);
        console.clear();
        console.log(grid.displayBoard(grid.updateBoard(board, positinonsToflip, positinonsToflip.length, currentPlayer.playerTag)));

        currentPlayer = players[(isTurn.assignTurn(positinonsToflip, currentPlayer.playerTag))];
        verifiedPositions  = inspector.checkPossiblePositions(board, currentPlayer.playerTag);
        currentPlayer = players[isTurn.switchPlayerWithoutMoves(verifiedPositions, currentPlayer.playerTag)];

        thereAreZeroTokens = isGameOver.playersWithoutTokens(players[0].tokenCount, players[1].tokenCount);
        thereAreZeroMoves = isGameOver.playersWithoutMoves(inspector.checkPossiblePositions(board, players[0].playerTag).length,
            inspector.checkPossiblePositions(board, players[1].playerTag).length);

        gameOver = isGameOver.whenIsGameOver(thereAreZeroTokens, thereAreZeroMoves);
    } else {
        console.log('\nInvalid position, enter valid position\n');
    }
}
console.log('GAME OVER');
console.log(inspector.countTokenForWinner(board));


