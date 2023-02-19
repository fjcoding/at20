
export class getPiecesToFlip {
    getPiecesToFlipRigth(position, grid, player) {
        var gridXmax = 7;
        var y = position[1];
        var x = position[0];
        var flip = [];
        var checkPieces = [];
        for (var index = y + 1; index < gridXmax; index++) {
            if ((grid[x][index]) == player || (grid[x][index] == 0)) {
                if (grid[x][index] == player) {
                    flip = checkPieces;
                }
                break;
            } else {
                var arr = [];
                arr = [x, index];
                checkPieces.push(arr);
            }
        }
        return flip;
    }

    getPiecesToFlipLeft(position, grid, player) {
        var y = position[1];
        var x = position[0];
        var flip = [];
        var checkPieces = [];
        for (var index = y - 1; index > 0; index--) {
            if ((grid[x][index]) == player || (grid[x][index] == 0)) {
                if (grid[x][index] == player) {
                    flip = checkPieces;
                }
                break;
            } else {
                var arr = [];
                arr = [x, index];
                checkPieces.push(arr);
            }
        }
        return flip;
    }
}