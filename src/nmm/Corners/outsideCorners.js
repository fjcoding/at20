import { positions } from '../possiblePositions.js';
export class outsideCorners {
    #outsidePosition;

    constructor() {
        this.#outsidePosition = {
            coner1 : positions.a0,
            coner2 : positions.a6,
            coner3 : positions.g0,
            coner4 : positions.g6
        };
    }

    isOutside(position) {
        for (let coner in this.#outsidePosition) {
            const row = this.#outsidePosition[coner].row;
            const col = this.#outsidePosition[coner].col;
            if (row === position[0] && col === position[1]) {
                return true;
            }
        }
        return false;
    }

    checkMove(currentPosition, newPosition) {
        const spaceRow = Math.abs(currentPosition[0] - newPosition[0]);
        const spaceCol = Math.abs(currentPosition[1] - newPosition[1]);
        if ((spaceRow === 3 ^ spaceCol === 3) && (spaceRow === 0 ^ spaceCol === 0)) {
            if (this.isOutside(currentPosition)) {
                return true;
            }
        }
        return false;
    }
}