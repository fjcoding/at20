export class Diagonals {
    #newTokenpos;

    #grid;

    #playtag;


    constructor(newTokenpos, playtag, grid) {
        this.#newTokenpos = newTokenpos;
        this.#grid = grid;
        this.#playtag = playtag;
    }

    check() {
        var ntxCoor = this.#newTokenpos[0];
        var ntyCoor = this.#newTokenpos[1];
        var ntValue = this.#playtag;
        var newDiags = [];
        var traDiags = [];
        var sign = -1;
        var sinX;
        var sinY;
        var step = 1;
        var steps = 0;
        if (ntValue == 'B') {
            for (var signX = 0; signX < 2; signX++) {// 11  00 77  14 26 41 63
                for (var signY = 0; signY < 2; signY++) {
                    sinX = (sign ** signX);
                    sinY = (sign ** signY);
                    traDiags = [];

                    if (sinX + sinY == 2) {
                        var max = Math.max(...this.#newTokenpos);
                        steps = 7 - max;
                        step = 1;
                    } else if (sinX + sinY == -2) {
                        var min = Math.min(...this.#newTokenpos);
                        steps = min;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor <= 7) {
                        min = Math.min(...this.#newTokenpos);
                        steps = min;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor <= 7) {
                        max = Math.max(...this.#newTokenpos);
                        steps = max;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor > 7) { //----------------
                        max = Math.max(...this.#newTokenpos);
                        steps = 7 - max;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor > 7) {
                        min = Math.min(...this.#newTokenpos);
                        steps = 7 - min;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor <= 7) {
                        max = Math.max(...this.#newTokenpos);
                        steps = max;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor <= 7) {
                        min = Math.min(...this.#newTokenpos);
                        steps = min;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor > 7) { //----------------
                        min = Math.min(...this.#newTokenpos);
                        steps = 7 - min;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor > 7) {
                        max = Math.max(...this.#newTokenpos);
                        steps = 7 - max;
                        step = 1;
                    }

                    while (step <= steps) {
                        if (this.#grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == 'W') {
                            traDiags.push([ntxCoor + sinX * step, ntyCoor + sinY * step]);
                        } else if (this.#grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == ntValue) {
                            newDiags = newDiags.concat(traDiags);
                            traDiags = [];
                            break;
                        } else if (this.#grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == ' ') {
                            traDiags = [];
                            break;
                        }
                        step += 1;
                    }
                }
            }
        } else if (ntValue == 'W') {
            for (signX = 0; signX < 2; signX++) {
                for (signY = 0; signY < 2; signY++) {
                    sinX = (sign ** signX);
                    sinY = (sign ** signY);
                    traDiags = [];


                    if (sinX + sinY == 2) {
                        max = Math.max(...this.#newTokenpos);
                        steps = 7 - max;
                        step = 1;
                    } else if (sinX + sinY == -2) {
                        min = Math.min(...this.#newTokenpos);
                        steps = min;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor <= 7) {
                        min = Math.min(...this.#newTokenpos);
                        steps = min;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor <= 7) {
                        max = Math.max(...this.#newTokenpos);
                        steps = max;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor > 7) { //----------------
                        max = Math.max(...this.#newTokenpos);
                        steps = 7 - max;
                        step = 1;
                    } else if (sinX > sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor > 7) {
                        min = Math.min(...this.#newTokenpos);
                        steps = 7 - min;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor <= 7) {
                        max = Math.max(...this.#newTokenpos);
                        steps = max;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor <= 7) {
                        min = Math.min(...this.#newTokenpos);
                        steps = min;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor >= ntyCoor && ntxCoor + ntyCoor > 7) { //----------------
                        min = Math.min(...this.#newTokenpos);
                        steps = 7 - min;
                        step = 1;
                    } else if (sinX < sinY && ntxCoor < ntyCoor && ntxCoor + ntyCoor > 7) {
                        max = Math.max(...this.#newTokenpos);
                        steps = 7 - max;
                        step = 1;
                    }
                    while (step <= steps) {
                        if (this.#grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == 'B') {
                            traDiags.push([ntxCoor + sinX * step, ntyCoor + sinY * step]);
                        } else if (this.#grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == ntValue) {
                            newDiags = newDiags.concat(traDiags);
                            traDiags = [];
                            break;
                        } else if (this.#grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == ' ') {
                            traDiags = [];
                            break;
                        }
                        step += 1;
                    }
                }
            }
        }
        return newDiags;
    }
}