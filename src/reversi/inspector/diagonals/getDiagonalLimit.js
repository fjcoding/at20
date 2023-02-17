export class getDiagonalLimit {
    #currentStep;

    #maxSteps;

    constructor () {
        this.#currentStep = 1;
        this.#maxSteps;
    }

    getLimit (signRow, signColumn, tokenPosition) {
        var tokenPositionRow = tokenPosition[0];
        var tokenPositionColumn = tokenPosition[1];

        if (signRow + signColumn == 2) {
            var max = Math.max(...tokenPosition);
            this.#maxSteps = 7 - max;
        } else if (signRow + signColumn == -2) {
            var min = Math.min(...tokenPosition);
            this.#maxSteps = min;
        } else if (signRow > signColumn) {
            if (tokenPositionRow >= tokenPositionColumn && tokenPositionRow + tokenPositionColumn <= 7) {
                min = Math.min(...tokenPosition);
                this.#maxSteps = min;
            } else if (tokenPositionRow < tokenPositionColumn && tokenPositionRow + tokenPositionColumn <= 7) {
                max = Math.max(...tokenPosition);
                this.#maxSteps = max;
            } else if (tokenPositionRow >= tokenPositionColumn && tokenPositionRow + tokenPositionColumn > 7) {
                max = Math.max(...tokenPosition);
                this.#maxSteps = 7 - max;
            } else if (tokenPositionRow < tokenPositionColumn && tokenPositionRow + tokenPositionColumn > 7) {
                min = Math.min(...tokenPosition);
                this.#maxSteps = 7 - min;
            }
        } else  {
            if (tokenPositionRow >= tokenPositionColumn && tokenPositionRow + tokenPositionColumn <= 7) {
                max = Math.max(...tokenPosition);
                this.#maxSteps = max;
            } else if (tokenPositionRow < tokenPositionColumn && tokenPositionRow + tokenPositionColumn <= 7) {
                min = Math.min(...tokenPosition);
                this.#maxSteps = min;
            } else if (tokenPositionRow >= tokenPositionColumn && tokenPositionRow + tokenPositionColumn > 7) {
                min = Math.min(...tokenPosition);
                this.#maxSteps = 7 - min;
            } else if (tokenPositionRow < tokenPositionColumn && tokenPositionRow + tokenPositionColumn > 7) {
                max = Math.max(...tokenPosition);
                this.#maxSteps = 7 - max;
            }
        }
    }

    get currentStep () {
        return this.#currentStep;
    }

    get maxSteps() {
        return this.#maxSteps;
    }
}

