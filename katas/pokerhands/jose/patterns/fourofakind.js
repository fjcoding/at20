import { HandPattern } from './handpattern';

export class FourOfAKind extends HandPattern {
    match(pokerhand) {
        const count = this.counter.countRepeatedValues(pokerhand);
        return Object.values(count).includes(4);
    }

    get name() {
        return 'Four of a Kind';
    }
}