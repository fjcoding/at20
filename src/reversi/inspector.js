
import {checkRowPossibleMovements} from './checkRowPossibleMovements.js';


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
        var positions = new checkRowPossibleMovements(boardTocheck, player);
        var availableRows = positions.checkRow();
        return availableRows;
    }

    checkMatchesToFlip (position, board, player) {
        var verifyColumn;
        var verifyRow;
        var verifyDiagonals;
        var flips = [];
        const piecesPosition = [];
        verifyRow = new checkAndFlipRow(position[0], position[1], board, player);//(x, y, grid, player)
        verifyColumn = new ColumnInspector(position, board, player);
        verifyDiagonals = new Diagonals (position, board, player);
        flips = flips.concat(verifyRow.checkRow(), verifyColumn.findFlipPositions(piecesPosition), verifyDiagonals.check());
        return flips;
    }
}