export class PokerHand {
    #cards = [];

    addCard(card) {
        this.#cards.push(card);
    }

    get cards() {
        return this.#cards;
    }
}