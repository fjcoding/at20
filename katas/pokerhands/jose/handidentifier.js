import { FourOfAKind } from './patterns/fourofakind';
import { StraightFlush } from './patterns/straightflush';

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