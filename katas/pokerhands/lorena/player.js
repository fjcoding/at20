
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

    valuesInHand () {
        var handArray = this.pokerhand.split (' ');
        var handArrayVal = [];

        for (let i = 0; i <= 4; i++) {
            var actCard = handArray[i];
            actCard = Array.from(actCard);
            console.log(actCard);
            if (actCard[0] == 'J') {
                actCard[0] = 11;
            }
            else if (actCard[0] == 'Q') {
                actCard[0] = 12;
            }
            else if (actCard[0] == 'K') {
                actCard[0] = 13;
            }
            else if (actCard[0] == 'A') {
                actCard[0] = 14;
            }
            actCard = actCard[0] + actCard[1];
            handArrayVal.push(actCard);
            console.log (handArrayVal);
        }
        return handArrayVal;
    }
}