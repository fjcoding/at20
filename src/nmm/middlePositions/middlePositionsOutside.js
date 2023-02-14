import { positions } from '../possiblePositions.js';

export class middlePositionsOutside {
    #middlePositions;

    constructor() {
        this.#middlePositions = [
            positions.a3,
            positions.d6,
            positions.g3,
            positions.d0
        ];
    }

    isMiddleOutside(position) {
        return this.#middlePositions.some(middlex => middlex.row === position[0] && middlex.col === position[1]);
    }

    checkMove(currentPosition, newPosition) {
        if (!this.isMiddleOutside(currentPosition)) {
            return false;
        }

        let spaceRow = Math.abs(currentPosition[0] - newPosition[0]);
        let spaceCol = Math.abs(currentPosition[1] - newPosition[1]);

        return (spaceRow === 3 && spaceCol === 0) || (spaceRow === 0 && spaceCol === 1);
    }
}

