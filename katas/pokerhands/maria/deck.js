export class Deck {
    #deck;

    constructor(deck) {
        this.#deck = deck;
    }

    dealDeck() {
        var newDeck = this.#deck.split(' ');
        return newDeck;
    }

    isHandOne(arrayCards) {
        var handOne = new Array();
        var arrayNumeber = ['2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < 5; i++) {
            var caracter = arrayCards[i + 1].charAt(0);
            if (arrayNumeber.includes(caracter)) {
                handOne[i] = {value:parseInt(caracter), suit : arrayCards[i + 1].charAt(1)};
            } else if (caracter == 'T') {
                handOne[i] = {value:10, suit : arrayCards[i + 1].charAt(1)};
            } else if (caracter == 'J') {
                handOne[i] = {value:11, suit : arrayCards[i + 1].charAt(1)};
            } else if (caracter == 'Q') {
                handOne[i] = {value:12, suit : arrayCards[i + 1].charAt(1)};
            } else if (caracter == 'K') {
                handOne[i] = {value:13, suit : arrayCards[i + 1].charAt(1)};
            } else {
                handOne[i] = {value:14, suit : arrayCards[i + 1].charAt(1)};
            }
        }

        return handOne;
    }

    isHandTwo(arrayCards) {
        var handTwo = new Array();
        var arrayNumeber = ['2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < 5; i++) {
            var caracter = arrayCards[i + 8].charAt(0);
            if (arrayNumeber.includes(caracter)) {
                handTwo[i] = {value:parseInt(caracter), suit : arrayCards[i + 8].charAt(1)};
            } else if (caracter == 'T') {
                handTwo[i] = {value:10, suit : arrayCards[i + 8].charAt(1)};
            } else if (caracter == 'J') {
                handTwo[i] = {value:11, suit : arrayCards[i + 8].charAt(1)};
            } else if (caracter == 'Q') {
                handTwo[i] = {value:12, suit : arrayCards[i + 8].charAt(1)};
            } else if (caracter == 'K') {
                handTwo[i] = {value:13, suit : arrayCards[i + 8].charAt(1)};
            } else {
                handTwo[i] = {value:14, suit : arrayCards[i + 8].charAt(1)};
            }
        }

        return handTwo;
    }

    sortHands(hand) {
        return hand.sort((x, y) => x.value - y.value);
    }

    hightCard(hand1, hand2) {
        var max1 = this.sortHands(hand1);
        var max2 = this.sortHands(hand2);
        var sizeHand = 4;
        var win = '';
        while (sizeHand >= 0) {
            if (max1[sizeHand].value > max2[sizeHand].value) {
                win = max1[sizeHand];
                sizeHand = -1;
            } else if (max1[sizeHand].value < max2[sizeHand].value) {
                win = max2[sizeHand];
                sizeHand = -1;
            } else if (max1[sizeHand].value === max2[sizeHand].value) {
                if (sizeHand === 0) {
                    win = 'Tie';
                }
                sizeHand--;
            }
        }
        return win;
    }

    searchPair(hand, newValue) {
        var position = 0;
        var pair = new Array();
        hand.forEach((o, i) => {
            if (o.value === newValue) {
                pair[position] = i;
                position++;
            }
        });
        return pair;
    }

    pairCard(hand1) {
        var max1 = this.sortHands(hand1);
        //var max2 = this.sortHands(hand2);
        var showPairs = new Array();
        var sizeHand = 5;
        while (sizeHand > 0) {
            var pair = this.searchPair(hand1, max1[sizeHand - 1].value);
            if (pair.length === 2) {
                showPairs[0] = hand1[pair[0]];
                showPairs[1] = hand1[pair[1]];
            }
            sizeHand--;
        }
        return  showPairs;
    }
}
