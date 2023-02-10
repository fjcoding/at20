export class Diagonals {
    #newTokenpos;

    #grid;

    #playtag;


    constructor(newTokenpos, playtag, grid) {
        this.#newTokenpos = newTokenpos;
        this.#grid = grid;
        this.#playtag = playtag;
    }

    checkDpos() {
        var ntxCoor = this.#newTokenpos[0];
        var ntyCoor = this.#newTokenpos[1];
        var ntValue = this.#playtag;
        var newDiags = [];
        var traDiags = [];

        if (ntValue == 'B') {
            var max = Math.max(...this.#newTokenpos);//   1.2  [[2, 3], [3, 4], [4, 5], [5, 6]]);

            var step = 1;
            var steps = 7 - max;

            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor + step][ntyCoor + step] == 'W') {
                    traDiags.push([ntxCoor + step, ntyCoor + step]);
                } else if (this.#grid[ntxCoor + step][ntyCoor + step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);
                    traDiags = [];

                    break;
                } else if (this.#grid[ntxCoor + step][ntyCoor + step] == ' ') {
                    traDiags = [];
                    break;
                }
                step += 1;
            }

            var min = Math.min(...this.#newTokenpos);
            step = 1;
            steps = min;

            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor - step][ntyCoor - step] == 'W') {
                    traDiags.push([ntxCoor - step, ntyCoor - step]);
                } else if (this.#grid[ntxCoor - step][ntyCoor - step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);
                    traDiags = [];
                    break;
                } else if (this.#grid[ntxCoor - step][ntyCoor - step] == ' ') {
                    traDiags = [];
                    break;
                }
                step += 1;
            }
        } else if (ntValue == 'W') {
            max = Math.max(...this.#newTokenpos);
            step = 1;
            steps = 7 - max;
            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor + step][ntyCoor + step] == 'B') {
                    traDiags.push([ntxCoor + step, ntyCoor + step]);
                } else if (this.#grid[ntxCoor + step][ntyCoor + step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);
                    traDiags = [];

                    break;
                } else if (this.#grid[ntxCoor + step][ntyCoor + step] == ' ') {
                    traDiags = [];
                    break;
                }

                step += 1;
            }

            min = Math.min(...this.#newTokenpos);
            step = 1;
            steps = min;
            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor - step][ntyCoor - step] == 'B') {
                    traDiags.push([ntxCoor - step, ntyCoor - step]);
                } else if (this.#grid[ntxCoor - step][ntyCoor - step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);

                    traDiags = [];
                    break;
                } else if (this.#grid[ntxCoor - step][ntyCoor - step] == ' ') {
                    traDiags = [];
                    break;
                }
                step += 1;
            }
        }

        return newDiags;
    }


    checkDneg() {
        var ntxCoor = this.#newTokenpos[0];
        var ntyCoor = this.#newTokenpos[1];
        var ntValue = this.#playtag;
        var newDiags = [];
        var traDiags = [];

        if (ntValue == 'B') {
            if (ntxCoor + ntyCoor <= 7) {
                var min = Math.min(...this.#newTokenpos);
                var step = 1;
                var steps = min;
            } else if (ntxCoor + ntyCoor > 7) {
                var max = Math.max(...this.#newTokenpos);
                step = 1;
                steps = 7 - max;
            }
            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor + step][ntyCoor - step] == 'W') {
                    traDiags.push([ntxCoor + step, ntyCoor - step]);
                } else if (this.#grid[ntxCoor + step][ntyCoor - step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);
                    traDiags = [];
                    break;
                } else if (this.#grid[ntxCoor + step][ntyCoor - step] == ' ') {
                    traDiags = [];
                    break;
                }
                step += 1;
            }
            if (ntxCoor + ntyCoor <= 7) {
                max = Math.max(...this.#newTokenpos);
                step = 1;
                steps = max;
            } else if (ntxCoor + ntyCoor > 7) {
                min = Math.min(...this.#newTokenpos);
                step = 1;
                steps = 7 - min;
            }
            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor - step][ntyCoor + step] == 'W') {
                    traDiags.push([ntxCoor - step, ntyCoor + step]);
                } else if (this.#grid[ntxCoor - step][ntyCoor + step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);
                    traDiags = [];
                    break;
                } else if (this.#grid[ntxCoor - step][ntyCoor + step] == ' ') {
                    traDiags = [];
                    break;
                }
                step += 1;
            }
        } else if (ntValue == 'W') {
            if (ntxCoor + ntyCoor <= 7) {
                min = Math.min(...this.#newTokenpos);
                step = 1;
                steps = min;
            } else if (ntxCoor + ntyCoor > 7) {
                max = Math.max(...this.#newTokenpos);
                step = 1;
                steps = 7 - max;
            }
            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor + step][ntyCoor - step] == 'B') {
                    traDiags.push([ntxCoor + step, ntyCoor - step]);
                } else if (this.#grid[ntxCoor + step][ntyCoor - step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);
                    traDiags = [];
                    break;
                } else if (this.#grid[ntxCoor + step][ntyCoor - step] == ' ') {
                    traDiags = [];
                }
                step += 1;
            }
            if (ntxCoor + ntyCoor <= 7) {
                max = Math.max(...this.#newTokenpos);
                step = 1;
                steps = max;
            } else if (ntxCoor + ntyCoor > 7) {
                min = Math.min(...this.#newTokenpos);
                step = 1;
                steps = 7 - min;
            }
            while (step <= steps) {
                if (step > steps) {
                    break;
                }
                if (this.#grid[ntxCoor - step][ntyCoor + step] == 'B') {
                    traDiags.push([ntxCoor - step, ntyCoor + step]);
                } else if (this.#grid[ntxCoor - step][ntyCoor + step] == ntValue) {
                    newDiags = newDiags.concat(traDiags);
                    traDiags = [];
                    break;
                } else if (this.#grid[ntxCoor - step][ntyCoor + step] == ' ') {
                    traDiags = [];
                }
                step += 1;
            }
        }
        return newDiags;
    }
}