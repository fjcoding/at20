import { middlePositionsInside } from './middlePositionsInside.js';
import { middlePositionsMiddle } from './middlePositionsMiddle.js';
import { middlePositionsOutside } from './middlePositionsOutside.js';

export class middlePositions {
    #outside;

    #middle;

    #inside;

    #middleType;

    constructor() {
        this.#outside = new middlePositionsOutside();
        this.#middle =  new middlePositionsMiddle();
        this.#inside = new middlePositionsInside();
        this.#middleType = [this.#outside, this.#middle, this.#inside];
    }

    isMiddle(position) {
        if (this.#outside.isMiddleOutside(position)) {
            return true;
        }
        if (this.#middle.isMiddleMiddle(position)) {
            return true;
        }
        if (this.#inside.isMiddleInside(position)) {
            return true;
        }

        return false;
    }

    checkMove(currentPosition, newPosition) {
        for (let middle of this.#middleType) {
            if (middle.checkMove(currentPosition, newPosition)) {
                return true;
            }
        }
        return false;
    }
}

const middle1 = new middlePositions();

middle1.checkMove([3, 2], [2, 2]);