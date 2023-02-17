import {getDiagonalLimit} from './getDiagonalLimit.js';
export class DiagonalPossibleMoves {
    checkPossibleMoves(grid, playtag) {
        var currentTag = playtag;
        var possDiags = [];
        var oppCount = 0;
        var sign = -1;
        var sinX;
        var sinY;
        var step = 1;
        var limit = new getDiagonalLimit();
        var stepLimit = 0;

        if (currentTag == 'B') {
            var opTag = 'W';
        } else if (currentTag == 'W') {
            opTag = 'B';
        }


        for (var keyX = 0; keyX < 8; keyX++) {
            for (var keyY = 0; keyY < 8; keyY++) {
                if (grid[keyX][keyY] == currentTag) {
                    for (var signX = 0; signX < 2; signX++) {
                        for (var signY = 0; signY < 2; signY++) {
                            sinX = (sign ** signX);
                            sinY = (sign ** signY);

                            limit.getLimit(sinX, sinY, [keyX, keyY]);
                            stepLimit = limit.maxSteps;
                            step = limit.currentStep;

                            while (step <= stepLimit) {
                                if (grid[keyX + sinX * step][keyY + sinY * step] == opTag) {
                                    oppCount += 1;
                                }
                                if ((grid[keyX + sinX * step][keyY + sinY * step] == ' ') && oppCount != 0) {
                                    possDiags.push([keyX + sinX * step, keyY + sinY * step]);
                                    oppCount = 0;
                                    break;
                                }
                                if ((grid[keyX + sinX * step][keyY + sinY * step] == ' ') && oppCount == 0) {
                                    oppCount = 0;
                                    break;
                                }
                                if (grid[keyX + sinX * step][keyY + sinY * step] == currentTag) {
                                    oppCount = 0;
                                    break;
                                }
                                step += 1;
                            }
                            oppCount = 0;
                        }
                    }
                }
            }
        }
        return possDiags;
    }
}