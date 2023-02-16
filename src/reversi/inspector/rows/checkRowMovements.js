import { getRowLimit } from './getRowLimit.js';

export class checkRowPossibleMovements {
    #grid;

    #player;

    constructor(grid, player) {
        this.#grid = grid;
        this.#player = player;
    }

    checkPossibleMoves() {
        var rowLimit = new getRowLimit(this.#grid, this.#player);
        var lefMovements = rowLimit.rowLimitToLeft();
        var rightMovements = rowLimit.rowLimitToRight();
        var PossibleMovements = [];
        PossibleMovements = PossibleMovements.concat(lefMovements, rightMovements);
        return PossibleMovements;
    }
}