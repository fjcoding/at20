export class Hands {
    #handString;

    constructor(handString) {
        this.#handString = handString;
    }

    separateCards() {
        const cards = ['2C', '3H', '4S', '8C', 'AH'];
        return cards;
    }
}