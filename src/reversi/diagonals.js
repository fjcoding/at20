export class Diagonals {
    constructor(newToken, grid) {
        this.newToken = newToken;
        this.grid = grid;
    }


    checkDpos() { //barrido positivo
        var ntxCoor = this.newToken[0];
        var ntyCoor = this.newToken[1];
        var ntValue = this.newToken[3];
        var newDiags = [];


        if (ntyCoor >= ntxCoor) {
            var keydx = 0;
            var keydy = ntyCoor - ntxCoor;

            while (keydy < 8) { // in other case the grid's max size can be introduced
                if (keydy > 8) { //|| newDiags.length >1
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
                if (keydx > 8) { //|| newDiags.length !=0
                    break;
                } else if ((ntValue == this.grid[keydx][keydy]) && (keydx != ntxCoor) && (keydy != ntyCoor)) {
                    newDiags.push([[ntxCoor, ntyCoor], [keydx, keydy], ntValue]);
                }
                keydx += 1;
                keydy += 1;
            }
        }
        //console.log(newDiags);
        return newDiags;
    }


    checkDneg() {
        var ntxCoor = this.newToken[0];
        var ntyCoor = this.newToken[1];//check for the values at the limits
        var ntValue = this.newToken[3];
        var newDiags = [];


        if ((ntxCoor + ntyCoor) <= 6) {
            var keydx = 0;
            var keydy = ntyCoor + ntxCoor;

            while (keydy >= 0) { // in other case the grid's max size can be introduced
                if (keydy < 0) {//|| newDiags.length !=0
                    break;
                } else if ((ntValue == this.grid[keydx][keydy]) && (keydx != ntxCoor) && (keydy != ntyCoor)) {
                    newDiags.push([[ntxCoor, ntyCoor], [keydx, keydy], ntValue]);
                }
                keydx += 1;
                keydy -= 1;
            }
        } else if ((ntxCoor + ntyCoor) > 6) {
            keydx = ntyCoor + ntxCoor - 7;
            keydy = 7;

            while (keydx <= 7) {
                if (keydx > 7) { //|| newDiags.length !=0
                    break;
                } else if ((ntValue == this.grid[keydx][keydy]) && (keydx != ntxCoor) && (keydy != ntyCoor)) {
                    newDiags.push([[ntxCoor, ntyCoor], [keydx, keydy], ntValue]);
                }
                keydx += 1;
                keydy -= 1;
            }
        }


        //console.log(newDiags);
        return newDiags;
    }

    flipDiag(coordinates) {// coordinates
        //stablish the points where we will make the flip
        if (coordinates.length != 0) {
            var gridToflip = this.grid;
            const initPoint = coordinates[0][0]; //given as [xi,yi]
            const initX = initPoint[0];
            const inity = initPoint[1];
            const sizeFlips = coordinates.length;


            for (var keyFlip = 0; keyFlip < sizeFlips; keyFlip++) {
                var toX = coordinates[keyFlip][1][0];
                var toY = coordinates[keyFlip][1][1];
                var intSymbol = coordinates[keyFlip][2];

                console.log(initX, inity, toX, toY, intSymbol);

                if ((initX < toX) && (inity < toY)) {
                    var steps = toX - initX;
                    var step = 1;

                    while (step < steps) {
                        if (step > steps) {
                            break;
                        }
                        gridToflip[initX + step][inity + step] = intSymbol;
                        step += 1;
                    }
                } else if ((initX > toX) && (inity > toY)) {
                    steps = initX - toX;
                    step = 1;

                    while (step < steps) {
                        if (step > steps) {
                            break;
                        }
                        gridToflip[initX - step][inity - step] = intSymbol;

                        step += 1;
                    }
                } else if ((initX > toX) && (inity < toY)) {
                    steps = initX - toX;
                    step = 1;

                    while (step < steps) {
                        if (step > steps) {
                            break;
                        }
                        gridToflip[initX - step][inity + step] = intSymbol;
                        step += 1;
                    }
                } else if ((initX < toX) && (inity > toY)) {
                    steps = inity - toY;
                    step = 1;

                    while (step < steps) {
                        if (step > steps) {
                            break;
                        }
                        gridToflip[initX + step][inity - step] = intSymbol;

                        step += 1;
                    }
                }
            }
        } else {
            gridToflip = 0;
        }

        return gridToflip;
    }
}