import { middlePositionsInside } from './middlePositionsInside';
import { middlePositionsMiddle } from './middlePositionsMiddle';
import { middlePositionsOutside } from './middlePositionsOutside';

export class middlePositions {
    #outside;

    #middle;

    #inside;

    constructor() {
        this.#outside = new middlePositionsOutside();
        this.#middle =  new middlePositionsMiddle();
        this.#inside = new middlePositionsInside();
    }

    isMiddle(position) {
        const isOutside = this.#outside.isMiddleOutside(position);
        const isMiddle = this.#middle.isMiddleMiddle(position);
        const isInside = this.#inside.isMiddleInside(position);
        if (isOutside) {
            return [true, 1];
        }
        if (isMiddle) {
            return [true, 2];
        }
        if (isInside) {
            return [true, 3];
        }

        return [false, 0];
    }

    checkMove(currentPosition, newPosition) {
        const middle = this.isMiddle(currentPosition);
        if (middle[0] === true) {
            if (middle[1] === 1) {
                return this.#outside.checkMove(currentPosition, newPosition);
            }
            if (middle[1] === 2) {
                return this.#middle.checkMove(currentPosition, newPosition);
            }
            if (middle[1] === 3) {
                return this.#inside.checkMove(currentPosition, newPosition);
            }
        }
        return false;
    }
}