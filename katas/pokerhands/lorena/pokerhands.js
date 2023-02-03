export class Card {
    value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    suite = ['C', 'D', 'H', 'S'];

    constructor(value, suite) {
        this.value = value;
        this.suite = suite;
    }

    cardREad () {
        return this.value + this.suite;
    }
}

export class Player {
    name = '';

    pokerhand = '';

    constructor(name, pokerhand) {
        this.name = name;
        this.pokerhand = pokerhand;
    }

    readHand () {
        return this.pokerhand;
    }

    handToCards () {
        return this.pokerhand.split(' ');
    }
}


let player1 = new Player('White', '5D 7D QC JH 3S');
console.log(player1);
console.log(player1.handToCards());