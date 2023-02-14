
//import {checkRowPossibleMovements} from './checkRowPossibleMovements.js';
import {freeDiagonals} from './freeDiagonals.js';


import {ColumnInspector} from './ColumnInspector.js';
import {checkAndFlipRow} from './RowPiecesThatCanFlip.js';
import {Diagonals} from './diagonals.js';

export class Inspector {
    #previousPlayer;

    #turnPlayer;

    // constructor(turnPlayer, playerTag) {
    //     this.#turnPlayer=turnPlayer;
    //     super (playerTag);
    // }

    checkPossiblePositions(boardTocheck, player) {
        //var verifyColumn;
        //var verifyRow;
        var verifyDiagonals;
        var availablePositions = [];


        //verifyRow = new checkRowPossibleMovements(boardTocheck, player);
        //verifyColumn = new
        verifyDiagonals = new freeDiagonals(boardTocheck, player);
        //availablePositions=availablePositions.concat(verifyRow.checkRow(),verifyDiagonals.checkPossibleMoves());
        availablePositions = availablePositions.concat(verifyDiagonals.checkPossibleMoves());
        return availablePositions;
    }

    checkMatchesToFlip (position, board, player) {
        var columnMatch;
        var rowMatch;
        var diagonalsMatch;
        var tokensToflip = [];
        const piecesPosition = [];
        rowMatch = new checkAndFlipRow(position[0], position[1], board, player);//(x, y, grid, player)
        columnMatch = new ColumnInspector(position, board, player);
        diagonalsMatch = new Diagonals (position, board, player);
        tokensToflip = tokensToflip.concat(rowMatch.checkRow(), columnMatch.findFlipPositions(piecesPosition), diagonalsMatch.check());
        return tokensToflip;
    }
}