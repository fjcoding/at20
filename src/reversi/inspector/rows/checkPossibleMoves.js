
import { positionOnBoard } from '../../board/positionOnBoard.js';

export class possibleMoves {
    possibleMovesToRight(grid, player) {
        var opositePlayer;
        if (player == 'B') {
            opositePlayer = 'W';
        } else {
            opositePlayer = 'B';
        }
        const piecePosition = new positionOnBoard(grid, opositePlayer);
        var newPositions = [];
        newPositions = piecePosition.asPositionOnBoard();
        var checkPieces = [];
        for (var index1 = 0; index1 < newPositions.length; index1++) {
            var x = newPositions[index1][0];
            var y = newPositions[index1][1] + 1;
            if (grid[x][y] == ' ' && y <= 7 && grid[x][y - 2] != ' ') {
                for (var keyf1 = y - 1; keyf1 >= 0; keyf1--) {
                    if ((grid[x][keyf1]) == player) {
                        var NewPositionArray = [];
                        NewPositionArray = [x, y];
                        checkPieces.push(NewPositionArray);
                        break;
                    }
                }
            }
        }
        return checkPieces;
    }

    possibleMovesToLeft(grid, player) {
        var opositePlayer;
        if (player == 'B') {
            opositePlayer = 'W';
        } else {
            opositePlayer = 'B';
        }
        const piecePosition = new positionOnBoard(grid, opositePlayer);
        var newPositions = [];
        newPositions = piecePosition.asPositionOnBoard();
        var checkPieces = [];
        for (var index = 0; index < newPositions.length; index++) {
            var x = newPositions[index][0];
            var y = newPositions[index][1] - 1;
            if (grid[x][y] == ' ' && y <= 7 && grid[x][y + 2] != ' ') {
                for (var keyf2 = y + 1; keyf2 <= 7; keyf2++) {
                    if ((grid[x][keyf2]) == player) {
                        var NewPositionArray = [];
                        NewPositionArray = [x, y];
                        checkPieces.push(NewPositionArray);
                        break;
                    }
                }
            }
        }
        return checkPieces;
    }
}