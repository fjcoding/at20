export class PokerHand {
    #cards = [];

    addCard(card) {
        this.#cards.push(card);
    }

    sortCards() {
        this.#cards.sort((leftCard, rightCard) => {
            return leftCard.value.numeric - rightCard.value.numeric;
        });
    }

    get cards() {
        return this.#cards;
    }
}