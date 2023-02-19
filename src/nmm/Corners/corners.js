import { insideCorners } from './insideCorners.js';
import { middleCorners } from './middleCorners.js';
import { outsideCorners } from './outsideCorners.js';

export class corners {
    #outside;

    #middle;

    #inside;

    #cornerType;

    constructor() {
        this.#outside = new outsideCorners();
        this.#middle =  new middleCorners();
        this.#inside = new insideCorners();
        this.#cornerType = [this.#outside, this.#middle, this.#inside];
    }

    isCorner(position) {
        if (this.#outside.isOutside(position)) {
            return true;
        }
        if (this.#middle.isMiddle(position)) {
            return true;
        }
        if (this.#inside.isInside(position)) {
            return true;
        }

        return false;
    }

    checkMove(currentPosition, newPosition) {
        for (let corner of this.#cornerType) {
            if (corner.checkMove(currentPosition, newPosition)) {
                return true;
            }
        }
        return false;
    }
}