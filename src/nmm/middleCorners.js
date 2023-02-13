import { positions } from './possiblePositions';
export class middleCorners {
    #middlePosition;

    constructor() {
        this.#middlePosition = {
            coner1 : positions.b5,
            coner2 : positions.f5,
            coner3 : positions.b1,
            coner4 : positions.f1
        };
    }

    isMiddle(position) {
        for (let coner in this.#middlePosition) {
            const row = this.#middlePosition[coner].row;
            const col = this.#middlePosition[coner].col;
            if (row === position[0] && col === position[1]) {
                return true;
            }
        }
        return false;
    }

    checkMove(currentPosition, newPosition) {
        const spaceRow = Math.abs(currentPosition[0] - newPosition[0]);
        const spaceCol = Math.abs(currentPosition[1] - newPosition[1]);
        if ((spaceRow === 2 ^ spaceCol === 2) && (spaceRow === 0 ^ spaceCol === 0)) {
            if (this.isMiddle(currentPosition)) {
                return true;
            }
        }
        return false;
    }
}