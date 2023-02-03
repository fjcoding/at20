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
        let dist = Array.apply(null, Array(14)).map(() => 0);
        const cards = this.separateCards();
        for (let i = 0; i < cards.length; i++) {
            let compareCard = new Card(cards[i]);
            dist[compareCard.value() - 1] += 1;
        }
        return dist;
    }

    countPosition(num) {
        const dist = this.distribution();
        for (let i = 1; i < 14; i++) {
            if (dist[i] == num) {
                return i;
            }
        }
        return false;
    }

    highStraightCard() {
        const dist = this.distribution();
        let cont = 0;
        for (let i = 1; i < dist.length; i++) {
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

    handRank() {
        if (this.highStraightCard() != false) {
            if (this.isFlush()) {
                return 8;
            }
        }
        if (this.countPosition(4) != false) {
            return 7;
        }
        if (this.countPosition(3) != false) {
            if (this.countPosition(2) != false) {
                return 6;
            }
        }
        if (this.isFlush()) {
            return 5;
        }
        if (this.highStraightCard() != false) {
            return 4;
        }
        if (this.countPosition(3) != false) {
            return 3;
        }
        if (this.countPosition(2) != false) {
            return 1;
        }
        return 0;
    }
}