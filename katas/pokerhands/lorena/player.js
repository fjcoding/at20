
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

    switchValInHand () {
        var handArray = this.pokerhand.split (' ');
        var handWhitVal = [];

        for (let i = 0; i <= 4; i++) {
            var actCard = handArray[i];
            actCard = Array.from(actCard);
            if (actCard[0] == 'J') {
                actCard[0] = 11;
            } else if (actCard[0] == 'Q') {
                actCard[0] = 12;
            } else if (actCard[0] == 'K') {
                actCard[0] = 13;
            } else if (actCard[0] == 'A') {
                actCard[0] = 14;
            }
            actCard = actCard[0] + actCard[1];
            handWhitVal.push(actCard);
        }
        return handWhitVal;
    }

    valuesHand() {
        var hand = this.switchValInHand();
        var valuesHand = [];
        for (let i = 0; i <= 4; i++) {
            var actCard = hand[i];
            valuesHand[i] = parseInt(actCard);
        }
        return valuesHand;
    }

    suitsHand() {
        var hand = this.switchValInHand();
        var suitsHand = [];
        for (let i = 0; i <= 4; i++) {
            var actCard = hand[i];
            actCard = Array.from(actCard);
            suitsHand[i] = actCard[actCard.length - 1];
        }
        return suitsHand;
    }
}