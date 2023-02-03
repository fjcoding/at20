import { Card } from './card';

export class Hands {
    #handString;

    constructor(handString) {
        this.#handString = handString;
    }

    separateCards() {
        const cards = this.#handString.split(' ');
        return cards;
    }

    isFlush() {
        const cards = this.separateCards();
        let cont = 0;
        const initCard = new Card(cards[0]);
        for (let i = 1; i < cards.length; i++) {
            let compareCard = new Card(cards[i]);
            if (initCard.suit() == compareCard.suit()) {
                cont++;
            }
        }
        if (cont == 4) {
            return true;
        }
        return false;
    }
}