import { HandPattern } from './handpattern';

export class StraightFlush extends HandPattern {
    match(pokerhand) {
        return this.checker.hasAllCardsSameSuit(pokerhand) &&
               this.checker.hasConsecutiveValues(pokerhand);
    }

    get name() {
        return 'Straight Flush';
    }
}