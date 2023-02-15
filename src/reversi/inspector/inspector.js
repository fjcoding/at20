
import {checkRowPossibleMovements} from './rows/checkRowPossibleMovements.js';
import {freeDiagonals} from './diagonals/freeDiagonals.js';


import {ColumnInspector} from './columns/ColumnInspector.js';
import {RowInspector} from './rows/RowInspector.js';
import {DiagonalsInspector} from './diagonals/DiagonalsInspector.js';

export class Inspector {
    #previousPlayer;

    #turnPlayer;

    // constructor(turnPlayer, playerTag) {
    //     this.#turnPlayer=turnPlayer;
    //     super (playerTag);
    // }

    checkPossiblePositions(boardTocheck, player) {
        var verifyColumn;
        var verifyRow;
        var verifyDiagonals;
        var availablePositions = [];
        var position = [0, 0];

        verifyRow = new checkRowPossibleMovements(boardTocheck, player);
        verifyColumn = new ColumnInspector(position, boardTocheck, player);
        verifyDiagonals = new freeDiagonals(boardTocheck, player);
        availablePositions = availablePositions.concat(verifyRow.possibleMoves(), verifyColumn.possibleMovements(), verifyDiagonals.checkPossibleMoves());
        //availablePositions = availablePositions.concat(verifyDiagonals.checkPossibleMoves());
        return availablePositions;
    }

    checkMatchesToFlip (position, board, player) {
        var columnMatch;
        var rowMatch;
        var diagonalsMatch;
        var tokensToflip = [];
        const piecesPosition = [];
        rowMatch = new RowInspector(position, board, player);
        columnMatch = new ColumnInspector(position, board, player);
        diagonalsMatch = new DiagonalsInspector(position, board, player);
        tokensToflip = tokensToflip.concat(rowMatch.checkRow(), columnMatch.findFlipPositions(piecesPosition), diagonalsMatch.check());
        return tokensToflip;
    }


    validatePosition(tokenPosition, availablePositions) {
        const length = availablePositions.length;
        var matchCount = 0;
        for (var index = 0; index < length; index++) {
            if (availablePositions[index][0] == tokenPosition[0] && availablePositions[index][1] == tokenPosition[1]) {
                matchCount++;
            }
        }
        if (matchCount >= 1) {
            return 1;
        } else {
            return 0;
        }
    }

    finalCount(board) {
        var whiteCount = 0;
        var blackCount = 0;
        var white = 'W';
        var black = 'B';
        const boardLenght = board.length;
        for (var i = 0; i < boardLenght; i++) {
            for (var j = 0; j < boardLenght; j++) {
                if (board[i][j] == white) {
                    whiteCount++;
                } else if (board[i][j] == black) {
                    blackCount++;
                }
            }
        }

        if (whiteCount > blackCount) {
            return 'White WINS with ' + whiteCount + ' tokens Vs ' + blackCount + ' black tokens!';
        } else if (whiteCount < blackCount) {
            return 'Black WINS with ' + blackCount + ' tokens Vs ' + whiteCount + ' white tokens!';
        } else {
            return 'It is a Tie! with ' + blackCount + ' tokens';
        }
    }
}