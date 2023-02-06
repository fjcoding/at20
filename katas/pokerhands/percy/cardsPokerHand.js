
export class handCard {
    //2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
    #handCards;

    #handCard;

    constructor(handCards) {
        this.#handCards = handCards;
        this.#parsehandCards();
    }

    get asHandCard() {
        return this.#handCard;
    }

    // '2H 3D 5S 9C KD';
    #parsehandCards() {
        this.#handCard = [];
        for (var i = 0; i < 17; i += 1) {
            const cardNumber = this.#handCards.substring(i, i += 2);
            this.#handCard.push(cardNumber);
        }
    }
}


