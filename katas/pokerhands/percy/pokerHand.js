export class pokerHand {
    //2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
    #handCards;

    #handCard;

    #cardsValue;

    #suit;

    constructor(handCards) {
        this.#handCards = handCards;
        this.asPokerHand();
    }
    // '2H 3D 5S 9C KD';

    asPokerHand() {
        this.#cardsValue = [];
        for (let i = 0; i < 5; i++) {
            const cardValue = this.#handCards[i].substring(0, 1);
            this.#cardsValue.push(cardValue);
        }
    }

    get asHandCard() {
        return this.#cardsValue;
    }
}