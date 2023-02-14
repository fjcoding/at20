import { positions } from '../possiblePositions.js';

export class middlePositionsInside {
    #insidePositions;

    constructor() {
        this.#insidePositions = [
            positions.d4,
            positions.c3,
            positions.d2,
            positions.e3
        ];
    }

    isMiddleInside(position) {
        return this.#insidePositions.some(insidex => insidex.row === position[0] && insidex.col === position[1]);
    }

    checkMove(currentPosition, newPosition) {
        if (!this.isMiddleInside(currentPosition)) {
            return false;
        }

        let spaceRow = Math.abs(currentPosition[0] - newPosition[0]);
        let spaceCol = Math.abs(currentPosition[1] - newPosition[1]);

        return (spaceRow === 1 && spaceCol === 0) || (spaceRow === 0 && spaceCol === 1);
    }
}

