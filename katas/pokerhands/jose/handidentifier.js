import { HandChecker } from './handchecker';
import { ValueCounter } from './valuecounter';

export class HandIdentifier {
    #checker = new HandChecker();

    #counter = new ValueCounter();

    identify(pokerhand) {
        let handPattern = undefined;
        const count = this.#counter.countRepeatedValues(pokerhand);
        if (this.#checker.hasAllCardsSameSuit(pokerhand) &&
           this.#checker.hasConsecutiveValues(pokerhand)) {
            handPattern = 'Straight Flush';
        } else if (Object.values(count).includes(4)) {
            handPattern = 'Four of a Kind';
        }
        return handPattern;
    }
}