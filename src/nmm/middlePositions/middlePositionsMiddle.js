import { positions } from '../possiblePositions.js';

export class middlePositionsMiddle {
    #MiddlePositions;

    constructor() {
        this.#MiddlePositions = [
            positions.b3,
            positions.d5,
            positions.f3,
            positions.d1
        ];
    }

    isMiddleMiddle(position) {
        return this.#MiddlePositions.some(Middlex => Middlex.row === position[0] && Middlex.col === position[1]);
    }

    checkMove(currentPosition, newPosition) {
        if (!this.isMiddleMiddle(currentPosition)) {
            return false;
        }

        let spaceRow = Math.abs(currentPosition[0] - newPosition[0]);
        let spaceCol = Math.abs(currentPosition[1] - newPosition[1]);

        return (spaceRow === 2 && spaceCol === 0) || (spaceRow === 0 && spaceCol === 1);
    }
}

