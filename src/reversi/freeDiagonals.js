export class freeDiagonals {
    #grid;

    #playtag;


    constructor(playtag, grid) {
        this.#grid = grid;
        this.#playtag = playtag;
    }

    checkForfree() {
        var currentTag = this.#playtag;
        var possDiags = [];
        var oppCount = 0;
        var sign = -1;
        var sinX;
        var sinY;
        var step = 1;
        var steps = 0;

        if (currentTag == 'B') {
            var opTag = 'W';
        } else if (currentTag == 'W') {
            opTag = 'B';
        }


        for (var keyX = 0; keyX < 8; keyX++) {
            for (var keyY = 0; keyY < 8; keyY++) {
                if (this.#grid[keyX][keyY] == currentTag) {
                    for (var signX = 0; signX < 2; signX++) {
                        for (var signY = 0; signY < 2; signY++) {
                            sinX = (sign ** signX);
                            sinY = (sign ** signY);
                            if (sinX + sinY == 2) {
                                var max = Math.max(...[keyX, keyY]);
                                steps = 7 - max;
                                step = 1;
                            } else if (sinX + sinY == -2) {
                                var min = Math.min(...[keyX, keyY]);
                                steps = min;
                                step = 1;
                            } else if (sinX > sinY && keyX >= keyY && keyX + keyY <= 7) {
                                min = Math.min(...[keyX, keyY]);
                                steps = min;
                                step = 1;
                            } else if (sinX > sinY && keyX < keyY && keyX + keyY <= 7) {
                                max = Math.max(...[keyX, keyY]);
                                steps = max;
                                step = 1;
                            } else if (sinX > sinY && keyX >= keyY && keyX + keyY > 7) {
                                max = Math.max(...[keyX, keyY]);
                                steps = 7 - max;
                                step = 1;
                            } else if (sinX > sinY && keyX < keyY && keyX + keyY > 7) {
                                min = Math.min(...[keyX, keyY]);
                                steps = 7 - min;
                                step = 1;
                            } else if (sinX < sinY && keyX >= keyY && keyX + keyY <= 7) {
                                max = Math.max(...[keyX, keyY]);
                                steps = max;
                                step = 1;
                            } else if (sinX < sinY && keyX < keyY && keyX + keyY <= 7) {
                                min = Math.min(...[keyX, keyY]);
                                steps = min;
                                step = 1;
                            } else if (sinX < sinY && keyX >= keyY && keyX + keyY > 7) {
                                min = Math.min(...[keyX, keyY]);
                                steps = 7 - min;
                                step = 1;
                            } else if (sinX < sinY && keyX < keyY && keyX + keyY > 7) {
                                max = Math.max(...[keyX, keyY]);
                                steps = 7 - max;
                                step = 1;
                            }

                            while (step <= steps) {
                                if (this.#grid[keyX + sinX * step][keyY + sinY * step] == opTag) {
                                    oppCount += 1;
                                    //console.log(oppCount,sinX,sinY,possDiags,keyX,keyY,keyX + sinX * step,keyY + sinY * step);
                                }
                                if ((this.#grid[keyX + sinX * step][keyY + sinY * step] == ' ') && oppCount != 0) {
                                    possDiags.push([keyX + sinX * step, keyY + sinY * step]);
                                    oppCount = 0;
                                    break;
                                }
                                if ((this.#grid[keyX + sinX * step][keyY + sinY * step] == ' ') && oppCount == 0) {
                                    oppCount = 0;
                                    //possDiags=[];
                                    break;
                                }
                                if (this.#grid[keyX + sinX * step][keyY + sinY * step] == currentTag) {
                                    oppCount = 0;
                                    //possDiags=[];
                                    break;
                                }
                                step += 1;
                            }
                            oppCount = 0;
                            //console.log(possDiags, sinX, sinY);
                        }
                    }
                }
            }
        }


        return possDiags;
    }
}