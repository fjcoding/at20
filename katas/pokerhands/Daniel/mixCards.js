export class Cards {
    constructor() {
        this.suit = ['C', 'D', 'H', 'S'];
        this.numbers = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        this.newHand = [];
    }

    handMaker() {
        for (let i = 0; i < 5; i++) {
            this.randSuit = this.suit[Math.floor(Math.random() * this.suit.length)];
            this.randNum = this.numbers[Math.floor(Math.random() * this.numbers.length)];
            this.newHand.push(this.randNum + this.randSuit);
        }
        return this.newHand;
    }

    newpHand() {
        return this.newHand;
    }
}