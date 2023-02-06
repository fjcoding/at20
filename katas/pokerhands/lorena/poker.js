//import { Card } from './cards';
import { Player } from './player';

export class Poker extends Player {
    constructor (name, pokerhan) {
        super (name, pokerhan);
    }

    highCard () {
        var highestCard = this.valuesHand();
        highestCard = Math.max(...highestCard);
        return highestCard;
    }

    pair () {
        var isPair = this.valuesHand();
        var pair = [false, ' '];
        var cont = 0;

        for (let i = 0; i <= 3; i++) {
            for (let j = i + 1; j <= 4; j++) {
                if ((isPair[i] == isPair[j]) && (cont == 0)) {
                    pair[0] = true;
                    pair[1] = isPair[i];
                    cont = cont + 1;
                } else if ((isPair[i] == isPair[j]) && (cont != 0)) {
                    pair[0] = false;
                    pair[1] = ' ';
                }
            }
        }
        return pair;
    }

    twoPair () {
        var isTwoPair = this.valuesHand();
        var twoPair = [false, ' ', ' '];
        var actIsTwoPair = [];
        var cont = 0;

        for (let i = 0; i <= 3; i++) {
            for (let j = i + 1; j <= 4; j++) {
                if ((isTwoPair[i] == isTwoPair[j]) && (cont <= 2)) {
                    twoPair[0] = true;
                    twoPair[1] = isTwoPair[i];
                    cont = cont + 1;
                } else if ((isTwoPair[i] == isTwoPair[j]) && (cont > 2)) {
                    twoPair[0] = false;
                    twoPair[1] = ' ';
                    twoPair[2] = ' ';
                }
            }
        }
        if (twoPair[0] == true) {
            for (let i = 0; i <= 4; i++) {
                if (isTwoPair[i] != twoPair[1]) {
                    actIsTwoPair.push(isTwoPair[i]);
                }
            }
            cont = 0;
            for (let i = 0; i <= 1; i++) {
                for (let j = i + 1; j <= 2; j++) {
                    if ((actIsTwoPair[i] == actIsTwoPair[j]) && (cont == 0)) {
                        //twoPair[0] = true;
                        //twoPair[1] = twoPair[1];
                        twoPair[2] = actIsTwoPair[i];
                        cont = cont + 1;
                    } else if ((actIsTwoPair[i] == actIsTwoPair[j]) && (cont != 0)) {
                        twoPair[0] = false;
                        twoPair[1] = ' ';
                        twoPair[2] = ' ';
                    }
                }
            }
        }
        return twoPair;
    }
}