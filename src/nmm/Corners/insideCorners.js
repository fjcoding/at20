import { positions } from '../possiblePositions';
export class insideCorners {
    #insidePosition;

    constructor() {
        this.#insidePosition = {
            coner1 : positions.c4,
            coner2 : positions.e4,
            coner3 : positions.c2,
            coner4 : positions.e2
        };
    }

    isInside(position) {
        for (let coner in this.#insidePosition) {
            const row = this.#insidePosition[coner].row;
            const col = this.#insidePosition[coner].col;
            if (row === position[0] && col === position[1]) {
                return true;
            }
        }
        return false;
    }

    checkMove(currentPosition, newPosition) {
        const spaceRow = Math.abs(currentPosition[0] - newPosition[0]);
        const spaceCol = Math.abs(currentPosition[1] - newPosition[1]);
        if ((spaceRow === 1 ^ spaceCol === 1) && (spaceRow === 0 ^ spaceCol === 0)) {
            if (this.isInside(currentPosition)) {
                return true;
            }
        }
        return false;
    }
}