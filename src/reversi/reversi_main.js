import {Player} from './player.js';
import {Grid} from './grid.js';
import { Inspector } from './inspector.js';
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
var verifyPositions = 0;

var count = 0;
var players = [Player1, Player2];
var currentPlayer = players[0];

while (count < 11) { // the condition to exit the loop should be bound to the amount of tokens each player has left and if there are any available positions
    verifyPositions  = inspector.checkPossiblePositions(board, currentPlayer.playerTag);// returns the possible positions
    console.log(verifyPositions);
    console.log('It is player ' + currentPlayer.playerTag + ' turn');
    var rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    var columnCoordinate = parseInt(prompt('Enter the column coordinate '));
    console.clear();
    newToken = currentPlayer.setToken(rowCoordinate, columnCoordinate);
    //verify available positions inspector. checkPossiblePositions();
    //If new token position is acepted
    board[newToken[0]][newToken[1]] = currentPlayer.playerTag;// palce the token on board

    console.log(grid.displayBoard(board));//display the new token
    console.clear();
    positinonsToflip = inspector.checkMatchesToFlip(newToken, board, currentPlayer.playerTag);//check macthes to flip
    console.log(grid.displayBoard(grid.updateBoard(board, positinonsToflip, positinonsToflip.length, currentPlayer.playerTag)));

    //when there is no play for one of the players, skip turn
    //print the turn player, add a function that changes players

    if (positinonsToflip.length != 0) {// decide whether to change or not the turn of the player
        // currentPlayer.playerTag = currentPlayer.playerTag;
        if (currentPlayer.playerTag == players[0].playerTag) {
            currentPlayer = players[1];// black
        } else {
            currentPlayer = players[0];//white
        }
    }

    //verifyPositions  = inspector.checkPossiblePositions(board,currentPlayer);// returns the possible positions
    // return 0 if there are no plays for both players, or no tokens left to play
    //console.log(verifyPositions);
    count++;
}
console.log('Fin del juego');
//agregar metodo que cuente las fichas en el tablero y determine el ganador
//read the board and return the results


