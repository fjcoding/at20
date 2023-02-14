import {Player} from './player.js';
import {Grid} from './grid.js';
import { Inspector } from './inspector.js';
import promptSync from 'prompt-sync';
const Player1 =  new Player('B');
const Player2 =  new Player('W');
const prompt = promptSync();
const grid = new Grid();
var board = grid.gridInit();


var matches = new Inspector();

console.log(grid.displayBoard(board));


var newToken;

var positinonsToflip = 0;

var count = 0;
var players = [Player1, Player2];
var currentPlayer = players[0];

while (count < 4) {
    console.log('Juega player: ' + currentPlayer.playerTag);
    var x = parseInt(prompt('Enter the row coordinate '));
    var y = parseInt(prompt('Enter the column coordinate '));
    //console.clear();
    newToken = currentPlayer.setToken(x, y);
    board[newToken[0]][newToken[1]] = currentPlayer.playerTag;
    console.log(grid.displayBoard(board));
    positinonsToflip = matches.checkMatchesToFlip(newToken, board, currentPlayer.playerTag);
    console.log(grid.displayBoard(grid.updateBoard(board, positinonsToflip, positinonsToflip.length, currentPlayer.playerTag)));

    if (positinonsToflip.length == 0) {
        // currentPlayer.playerTag = currentPlayer.playerTag;
    } else {
        if (currentPlayer.playerTag == players[0].playerTag) {
            currentPlayer = players[1];// black
        } else {
            currentPlayer = players[0];//white
        }
    }

    count++;
}
// while (inspector.checkPossiblePositions(board) != 0) {
//     //verify = inspector.checkPossiblePositions(board);// returns the possible positions
//     // return 0 if there are no plays for both players, or no tokens left to play
//     //verify available positions inspector. checkPossiblePositions();
//     //when there is no play for one of the players, skip turn
//     //print the turn player, add a class that changes
//
//     //player1.tokenCount;
//
//     //Si el nuevo token es valido
//

//     //console.log(grid.displayBoard(board));
// }
//console.log(grid.displayBoard(board));
console.log('Fin del juego');

//agregar metodo que cuente las fichas en el tablero y determine el ganador
//read the board and return the results


