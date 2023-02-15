import { insideCorners } from './insideCorners.js';
import { middleCorners } from './middleCorners.js';
import { outsideCorners } from './outsideCorners.js';

export class corners {
    #outside;

    #middle;

    #inside;

    constructor() {
        this.#outside = new outsideCorners();
        this.#middle =  new middleCorners();
        this.#inside = new insideCorners();
    }

    isCorner(position) {
        const isOutside = this.#outside.isOutside(position);
        const isMiddle = this.#middle.isMiddle(position);
        const isInside = this.#inside.isInside(position);
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
        const corner = this.isCorner(currentPosition);
        if (corner[0] === true) {
            if (corner[1] === 1) {
                return this.#outside.checkMove(currentPosition, newPosition);
            }
            if (corner[1] === 2) {
                return this.#middle.checkMove(currentPosition, newPosition);
            }
            if (corner[1] === 3) {
                return this.#inside.checkMove(currentPosition, newPosition);
            }
        }
        return false;
    }
}