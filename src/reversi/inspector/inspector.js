
import {checkRowPossibleMovements} from './rows/checkRowMovements.js';
import {ColumnInspector} from './columns/ColumnInspector.js';
import {RowInspector} from './rows/RowInspector.js';
import {DiagonalsInspector} from './diagonals/DiagonalsInspector.js';

export class Inspector {
    checkPossiblePositions(boardTocheck, player) {
        var verifyColumn;
        var verifyRow;
        var verifyDiagonals;
        var availablePositions = [];
        var position = [0, 0];
        verifyRow = new checkRowPossibleMovements(boardTocheck, player);
        verifyColumn = new ColumnInspector(position, boardTocheck, player);
        verifyDiagonals = new DiagonalsInspector().checkPossibleMoves(boardTocheck, player);
        availablePositions = availablePositions.concat(verifyRow.checkPossibleMoves(), verifyColumn.possibleMovements(), verifyDiagonals);
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
        diagonalsMatch = new DiagonalsInspector().findPositionsToFlip(position, board, player);
        tokensToflip = tokensToflip.concat(rowMatch.checkRow(), columnMatch.findFlipPositions(piecesPosition), diagonalsMatch);
        return tokensToflip;
    }


    validatePosition(tokenPosition, availablePositions) {
        const length = availablePositions.length;
        var matchState = false;
        for (var index = 0; index < length; index++) {
            if (availablePositions[index][0] == tokenPosition[0] && availablePositions[index][1] == tokenPosition[1]) {
                matchState = true;
                break;
            }
        }
        return matchState;
    }

    countTokenForWinner(board) {
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