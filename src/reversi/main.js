import {Player} from './player.js';
import {Grid} from './board/grid.js';
import { Inspector } from './inspector/inspector.js';
import promptSync from 'prompt-sync';

const Player1 =  new Player('B');
const Player2 =  new Player('W');
const prompt = promptSync();
const grid = new Grid();
var board = grid.gridInit();
var inspector = new Inspector();
console.log(grid.displayBoard(board));

var newToken;
var positinonsToflip = 0;
var verifiedPositions = 0;
var availablePositions;
var players = [Player1, Player2];
var currentPlayer = players[0];
var gameStatus = 1;

while (gameStatus == 1) {
    verifiedPositions  = inspector.checkPossiblePositions(board, currentPlayer.playerTag);
    console.log(verifiedPositions);
    console.log('It is player ' + currentPlayer.playerTag + ' turn');
    var rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    var columnCoordinate = parseInt(prompt('Enter the column coordinate '));

    newToken = currentPlayer.setToken(rowCoordinate, columnCoordinate);
    availablePositions = inspector.validatePosition(newToken, verifiedPositions);

    if (availablePositions == 1) {
        currentPlayer.discount();
        board[newToken[0]][newToken[1]] = currentPlayer.playerTag;//place a token on board
        console.clear();
        console.log(grid.displayBoard(board));//display the new token

        positinonsToflip = inspector.checkMatchesToFlip(newToken, board, currentPlayer.playerTag);
        console.clear();
        console.log(grid.displayBoard(grid.updateBoard(board, positinonsToflip, positinonsToflip.length, currentPlayer.playerTag)));

        if (positinonsToflip.length != 0) {
            if (currentPlayer.playerTag == players[0].playerTag) {
                currentPlayer = players[1];//white
            } else {
                currentPlayer = players[0];//black
            }
        }

        verifiedPositions  = inspector.checkPossiblePositions(board, currentPlayer.playerTag);

        if (verifiedPositions.length == 0 || (players[0].tokenCount == 0 && players[1].tokenCount == 0)) {
            if (players[0].tokenCount == 0 && players[1].tokenCount == 0) {
                gameStatus = 0;
                console.log('No more moves');
            }

            if (currentPlayer.playerTag == players[0].playerTag) {
                currentPlayer = players[1];//white
            } else {
                currentPlayer = players[0];//black
            }
        }
    } else {
        console.log('\nInvalid position, enter valid position\n');
    }
}
console.log('Fin del juego');
console.log(inspector.finalCount(board));


