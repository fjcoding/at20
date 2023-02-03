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

    distribution() {
        let dist = Array.apply(null, Array(13)).map(() => 0);
        const cards = this.separateCards();
        for (let i = 0; i < cards.length; i++) {
            let compareCard = new Card(cards[i]);
            dist[compareCard.value() - 2] += 1;
        }
        return dist;
    }

    countPosition(num) {
        const dist = this.distribution();
        for (let i = 0; i < 13; i++) {
            if (dist[i] == num) {
                return i;
            }
        }
        return false;
    }

    highStraightCard() {
        const dist = this.distribution();
        let cont = 0;
        for (let i = 0; i < dist.length; i++) {
            for (let j = 0; j < 4; j++) {
                if (dist[i + j] == 1) {
                    cont++;
                }
            }
            if (cont == 4) {
                return i + 3;
            } else {
                cont = 0;
            }
        }
        return false;
    }
}