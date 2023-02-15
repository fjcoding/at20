import {getDiagonalLimit} from './getDiagonalLimit.js';
export class DiagonalsInspector {
    #newTokenpos;

    #grid;

    #playtag;


    constructor(newTokenpos, grid, playtag) {
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
        var limit = new getDiagonalLimit();
        var stepLimit = 0;

        if (ntValue == 'B') {
            var opValue = 'W';
        } else if (ntValue == 'W') {
            opValue = 'B';
        }
        for (var signX = 0; signX < 2; signX++) {
            for (var signY = 0; signY < 2; signY++) {
                sinX = (sign ** signX);
                sinY = (sign ** signY);
                traDiags = [];

                limit.getLimit(sinX, sinY, this.#newTokenpos);
                stepLimit = limit.maxSteps;
                step = limit.currentStep;

                while (step <= stepLimit) {
                    if (this.#grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == opValue) {
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

        return newDiags;
    }
}