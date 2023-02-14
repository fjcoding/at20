import { HandChecker } from './handchecker';

export class HandIdentifier {
    #checker = new HandChecker();

    identify(pokerhand) {
        let handPattern = undefined;
        if (this.#checker.hasAllCardsSameSuit(pokerhand) &&
           this.#checker.hasConsecutiveValues(pokerhand)) {
            handPattern = 'Straight Flush';
        }
        return handPattern;
    }
}