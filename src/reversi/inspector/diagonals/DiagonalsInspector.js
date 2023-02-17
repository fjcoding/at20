import {getDiagonalLimit} from './getDiagonalLimit.js';
import {DiagonalPossibleMoves} from './DiagonalPossibleMoves.js';
export class DiagonalsInspector extends DiagonalPossibleMoves {
    findPositionsToFlip(newTokenpos, grid, playtag) {
        super.findPositionsToFlip;
        var ntxCoor = newTokenpos[0];
        var ntyCoor = newTokenpos[1];
        var ntValue = playtag;
        var newDiags = [];
        var tempDiags = [];
        var sign = -1;
        var sinX;
        var sinY;
        var step = 1;
        var limit = new getDiagonalLimit();
        var stepLimit = 0;

        if (ntValue == 'B') {
            var opValue = 'W';
        } else {
            opValue = 'B';
        }
        for (var signX = 0; signX < 2; signX++) {
            for (var signY = 0; signY < 2; signY++) {
                sinX = (sign ** signX);
                sinY = (sign ** signY);
                tempDiags = [];

                limit.getLimit(sinX, sinY, newTokenpos);
                stepLimit = limit.maxSteps;
                step = limit.currentStep;

                while (step <= stepLimit) {
                    if (grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == opValue) {
                        tempDiags.push([ntxCoor + sinX * step, ntyCoor + sinY * step]);
                    } else if (grid[ntxCoor + sinX * step][ntyCoor + sinY * step] == ntValue) {
                        newDiags = newDiags.concat(tempDiags);
                        tempDiags = [];
                        break;
                    } else  {
                        tempDiags = [];
                        break;
                    }
                    step += 1;
                }
            }
        }

        return newDiags;
    }
}