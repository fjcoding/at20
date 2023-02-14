import { FourOfAKind } from './patterns/FourOfAKind';
import { StraightFlush } from './patterns/StraightFlush';

export class HandIdentifier {
    #patterns = [
        new StraightFlush(),
        new FourOfAKind()
    ];

    identify(pokerhand) {
        let handPattern = undefined;
        for (let index = 0; index < this.#patterns.length; index++) {
            const pattern = this.#patterns[index];
            if (pattern.match(pokerhand)) {
                handPattern = pattern.name;
                break;
            }
        }
        return handPattern;
    }
}