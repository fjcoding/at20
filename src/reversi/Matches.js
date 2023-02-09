export class checkStatus {
    constructor(newToken, grid) {
        this.newToken = newToken;
        this.grid = grid;
    }

    checkRow() {
        var gridXmax = 8;

        var ntxCoor = this.newToken[0];
        var ntyCoor = this.newToken[1];
        var ntValue = this.newToken[3];//
        var newRows = [];

        for (var keyf1 = 0; keyf1 < gridXmax; keyf1++) {// the format for the checkStatus class [[xi,yi],[xf,yf],value of the token]
            if ((ntValue == this.grid[ntxCoor][keyf1]) && (keyf1 != ntyCoor)) {// assuming that the token has already been palced,
                newRows.push([[ntxCoor, ntyCoor], [ntxCoor, keyf1], ntValue]);// for the flip function // return the coordinates to flip the values in that tange

                //ask if the think its necessary to add the exception when they are together
            }
        }


        return newRows;
    }

    checkColumn() {
        var gridYmax = 8;
        var ntxCoor = this.newToken[0];
        var ntyCoor = this.newToken[1];
        var ntValue = this.newToken[3];//
        var newColumns = [];


        for (var keyf2 = 0; keyf2 < gridYmax; keyf2++) {
            if ((ntValue == this.grid[keyf2][ntyCoor]) && (keyf2 != ntxCoor)) {// assuming that the token has already been palced,
                newColumns.push([[ntxCoor, ntyCoor], [keyf2, ntyCoor], ntValue]);// for the flip function // return the coordinates to flip the values in that tange
            }
        }
        return newColumns;
    }

    checkDiag() {
        var ntxCoor = this.newToken[0];
        var ntyCoor = this.newToken[1];
        var ntValue = this.newToken[3];
        var newDiags = [];
        if (ntyCoor > ntxCoor) {
            var keydx = 0;
            var keydy = ntyCoor - ntxCoor;

            while (keydy < 8) { // in other case the grid's max size can be introduced
                if (keydy > 8) {
                    break;
                } else if ((ntValue == this.grid[keydx][keydy]) && (keydx != ntxCoor) && (keydy != ntyCoor)) {
                    newDiags.push([[ntxCoor, ntyCoor], [keydx, keydy], ntValue]);
                }
                keydx += 1;
                keydy += 1;
            }

            //re definir keydx y keydy
            keydx = (ntxCoor + ntyCoor) - ntyCoor;
            keydy = 7;

            while (keydy < 8) { // in other case the grid's max size can be introduced
                if (keydy > 8) {
                    break;
                } else if ((ntValue == this.grid[keydx][keydy]) && (keydx != ntxCoor) && (keydy != ntyCoor)) {
                    newDiags.push([[ntxCoor, ntyCoor], [keydx, keydy], ntValue]);
                }
                keydx += 1;
                keydy += 1;
            }
        } else if (ntyCoor < ntxCoor) {
            keydx = ntxCoor - ntyCoor;
            keydy = 0;

            while (keydx < 8) { // in other case the grid's max size can be introduced
                if (keydx > 8) {
                    break;
                } else if ((ntValue == this.grid[keydx][keydy]) && (keydx != ntxCoor) && (keydy != ntyCoor)) {
                    newDiags.push([[ntxCoor, ntyCoor], [keydx, keydy], ntValue]);
                }
                keydx += 1;
                keydy += 1;
            }
        } else if (ntyCoor == ntxCoor) {
            keydx = 0;
            keydy = 0;

            while (keydx < 8) { // in other case the grid's max size can be introduced
                if (keydx > 8) {
                    break;
                } else if ((ntValue == this.grid[keydx][keydy]) && (keydx != ntxCoor) && (keydy != ntyCoor)) {
                    newDiags.push([[ntxCoor, ntyCoor], [keydx, keydy], ntValue]);
                }
                keydx += 1;
                keydy += 1;
            }
        }

        return newDiags;
    }
}