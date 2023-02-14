import { HandChecker } from '../handchecker';
import { ValueCounter } from '../valuecounter';

export class HandPattern {
    #checker = new HandChecker();

    #counter = new ValueCounter();

    match(pokerhand) {
        throw new Error(`abstract, must implement match method ${pokerhand}`);
    }

    get name() {
        throw new Error('abstract, must implement name method');
    }

    get checker() {
        return this.#checker;
    }

    get counter() {
        return this.#counter;
    }
}