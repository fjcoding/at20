import { corners } from './Corners/corners.js';
import { middlePositions } from './middlePositions/middlePositions.js';
export class rule {
    #conersRules;

    #middleRules;

    constructor() {
        this.#conersRules = new corners();
        this.#middleRules = new middlePositions();
    }

    isPossiblePosition(position) {
        return this.#conersRules.isCorner(position) || this.#middleRules.isMiddle(position);
    }

    checkMove(currentPosition, newPosition) {
        return this.#conersRules.checkMove(currentPosition, newPosition) || this.#middleRules.checkMove(currentPosition, newPosition);
    }
}