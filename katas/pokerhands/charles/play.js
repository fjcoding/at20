import { PokerHand } from './pokerHand';

export class Play {
    static rankingPH = {
        'HC': 1,
        'PA': 2,
        '2P': 3,
        '3K': 4,
        'ST': 5,
        'FL': 6,
        'FH': 7,
        'FK': 8,
        'SF': 9,
    };

    #players;

    constructor(pokerHandsPlayers) {
        this.#players = {};
        let playersPH = pokerHandsPlayers.split('  ');
        let valPlayer;
        let numPlayer;
        let cardsPlayer;
        let countPlayers = 1;
        playersPH.forEach(player => {
            valPlayer = player.split(': ');
            numPlayer = 'player' + countPlayers;
            cardsPlayer = new PokerHand(valPlayer[1].split(' '));
            this.#players[numPlayer] = {
                'name': valPlayer[0],
                'pokerHand': cardsPlayer,
                // 'rankPH': this.rankingPokerHand(valPlayer[1].split(' '))
                'rankPH': this.rankingPokerHand(cardsPlayer)
            };
            countPlayers++;
        });
    }

    pokerHandsPlayers() {
        return this.getPlayers();
    }

    classificationResult() {
        let result;
        let valPlayer1 = Play.rankingPH[this.getPlayers().player1.rankPH];
        let valPlayer2 = Play.rankingPH[this.getPlayers().player2.rankPH];
        let rankingPH;
        if (valPlayer1 == valPlayer2) {
            result = 'Tie';
            if (this.#players.player1.rankPH == 'HC' || this.#players.player1.rankPH == 'FL') {
                rankingPH = this.#players.player1.rankPH == 'HC' ? 'high card' : 'flush';
                let chgVal = true;
                for (let index = 0; index < 5 && chgVal; index++) {
                    if (PokerHand.valueCards[this.#players.player1.pokerHand.getCards()[index].getValueCard()] > PokerHand.valueCards[this.#players.player2.pokerHand.getCards()[index].getValueCard()]) {
                        result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getCards()[index].getValueCard();
                        chgVal = false;
                    } else if (PokerHand.valueCards[this.#players.player1.pokerHand.getCards()[index].getValueCard()] < PokerHand.valueCards[this.#players.player2.pokerHand.getCards()[index].getValueCard()]) {
                        result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getCards()[index].getValueCard();
                        chgVal = false;
                    }
                }
            } else if (this.#players.player1.rankPH == 'PA') {
                rankingPH = 'pair';
                let chgVal = true;
                if (PokerHand.valueCards[this.#players.player1.pokerHand.getPairs()[0]] == PokerHand.valueCards[this.#players.player2.pokerHand.getPairs()[0]]) {
                    for (let index = 0; index < 3 && chgVal; index++) {
                        if (PokerHand.valueCards[this.#players.player1.pokerHand.getPockerHandRest()[index]] > PokerHand.valueCards[this.#players.player2.pokerHand.getPockerHandRest()[index]]) {
                            result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getPockerHandRest()[index];
                            chgVal = false;
                        } else if (PokerHand.valueCards[this.#players.player1.pokerHand.getPockerHandRest()[index]] < PokerHand.valueCards[this.#players.player2.pokerHand.getPockerHandRest()[index]]) {
                            result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getPockerHandRest()[index];
                            chgVal = false;
                        }
                    }
                } else if (PokerHand.valueCards[this.#players.player1.pokerHand.getPairs()[0]] > PokerHand.valueCards[this.#players.player2.pokerHand.getPairs()[0]]) {
                    result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getPairs()[0];
                } else {
                    result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getPairs()[0];
                }
            } else if (this.#players.player1.rankPH == '2P') {
                rankingPH = 'two pairs';
                let chgVal = true;
                for (let index = 0; index < 2 && chgVal; index++) {
                    if (PokerHand.valueCards[this.#players.player1.pokerHand.getPairs()[index]] > PokerHand.valueCards[this.#players.player2.pokerHand.getPairs()[index]]) {
                        result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getPairs()[index];
                        chgVal = false;
                    } else if (PokerHand.valueCards[this.#players.player1.pokerHand.getPairs()[index]] < PokerHand.valueCards[this.#players.player2.pokerHand.getPairs()[index]]) {
                        result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getPairs()[index];
                        chgVal = false;
                    }
                }
                if (chgVal) {
                    if (PokerHand.valueCards[this.#players.player1.pokerHand.getPockerHandRest()[0]] > PokerHand.valueCards[this.#players.player2.pokerHand.getPockerHandRest()[0]]) {
                        result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getPockerHandRest()[0];
                    } else if (this.#players.player1.pokerHand.getPockerHandRest()[0] < this.#players.player2.pokerHand.getPockerHandRest()[0]) {
                        result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getPockerHandRest()[0];
                    }
                }
            } else if (this.#players.player1.rankPH == '3K' || this.#players.player1.rankPH == 'FH' || this.#players.player1.rankPH == '4K') {
                if (this.#players.player1.rankPH == 'FH') {
                    rankingPH = 'full house';
                    if (PokerHand.valueCards[this.#players.player1.pokerHand.getSameKind()] > PokerHand.valueCards[this.#players.player2.pokerHand.getSameKind()]) {
                        result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getSameKind() + ' over ' + this.#players.player1.pokerHand.getPockerHandRest()[0];
                    } else if (PokerHand.valueCards[this.#players.player1.pokerHand.getSameKind()] < PokerHand.valueCards[this.#players.player2.pokerHand.getSameKind()]) {
                        result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getSameKind() + ' over ' + this.#players.player2.pokerHand.getPockerHandRest()[0];
                    }
                } else {
                    if (this.#players.player1.rankPH == '3K') {
                        rankingPH = 'three of a kind';
                    } else {
                        rankingPH = 'four of a kind';
                    }
                    if (PokerHand.valueCards[this.#players.player1.pokerHand.getSameKind()] > PokerHand.valueCards[this.#players.player2.pokerHand.getSameKind()]) {
                        result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getSameKind();
                    } else if (PokerHand.valueCards[this.#players.player1.pokerHand.getSameKind()] < PokerHand.valueCards[this.#players.player2.pokerHand.getSameKind()]) {
                        result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getSameKind();
                    }
                }
            } else if (this.#players.player1.rankPH == 'ST' || this.#players.player1.rankPH == 'SF') {
                if (this.#players.player1.rankPH == 'ST') {
                    rankingPH = 'straight';
                } else {
                    rankingPH = 'straight flush';
                }
                if (PokerHand.valueCards[this.#players.player1.pokerHand.getCards()[0]] > PokerHand.valueCards[this.#players.player2.pokerHand.getCards()[0]]) {
                    result = this.getPlayers().player1.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player1.pokerHand.getCards()[0];
                } else if (PokerHand.valueCards[this.#players.player1.pokerHand.getCards()[0]] < PokerHand.valueCards[this.#players.player2.pokerHand.getCards()[0]]) {
                    result = this.getPlayers().player2.name + ' wins. - with ' + rankingPH + ': ' + this.#players.player2.pokerHand.getCards()[0];
                }
            }
        } else if (valPlayer1 > valPlayer2) {
            switch (this.getPlayers().player1.rankPH) {
            case 'HC':
                result = this.getPlayers().player1.name + ' wins. - with high card: ' + this.#players.player1.pokerHand.getCards()[0].getValueCard();
                break;
            case 'PA':
                result = this.getPlayers().player1.name + ' wins. - with pair: ' + this.#players.player1.pokerHand.getPairs()[0];
                break;
            case '2P':
                result = this.getPlayers().player1.name + ' wins. - with two pairs: ' + this.#players.player1.pokerHand.getPairs()[0] + ' - ' + this.#players.player1.pokerHand.getPairs()[1];
                break;
            case '3K':
                result = this.getPlayers().player1.name + ' wins. - with three of a kind: ' + this.#players.player1.pokerHand.getSameKind();
                break;
            case 'ST':
                result = this.getPlayers().player1.name + ' wins. - with straight: ' + this.#players.player1.pokerHand.getCards()[0];
                break;
            case 'FL':
                result = this.getPlayers().player1.name + ' wins. - with flush: ' + this.#players.player1.pokerHand.getCards()[0].getValueCard();
                break;
            case 'FH':
                result = this.getPlayers().player1.name + ' wins. - with full house: ' + this.#players.player1.pokerHand.getSameKind() + ' over ' + this.#players.player1.pokerHand.getPairs()[0];
                break;
            case '4K':
                result = this.getPlayers().player1.name + ' wins. - with four of a kind: ' + this.#players.player1.pokerHand.getSameKind();
                break;
            case 'SF':
                result = this.getPlayers().player1.name + ' wins. - with straight flush: ' + this.#players.player1.pokerHand.getCards()[0];
                break;
            }
        } else {
            switch (this.getPlayers().player2.rankPH) {
            case 'HC':
                result = this.getPlayers().player2.name + ' wins. - with high card: ' + this.#players.player2.pokerHand.getCards()[0].getValueCard();
                break;
            case 'PA':
                result = this.getPlayers().player2.name + ' wins. - with pair: ' + this.#players.player2.pokerHand.getPairs()[0];
                break;
            case '2P':
                result = this.getPlayers().player2.name + ' wins. - with two pairs: ' + this.#players.player2.pokerHand.getPairs()[0] + ' - ' + this.#players.player2.pokerHand.getPairs()[1];
                break;
            case '3K':
                result = this.getPlayers().player2.name + ' wins. - with three of a kind: ' + this.#players.player2.pokerHand.getSameKind();
                break;
            case 'ST':
                result = this.getPlayers().player2.name + ' wins. - with straight: ' + this.#players.player2.pokerHand.getCards()[0];
                break;
            case 'FL':
                result = this.getPlayers().player2.name + ' wins. - with flush: ' + this.#players.player2.pokerHand.getCards()[0].getValueCard();
                break;
            case 'FH':
                result = this.getPlayers().player2.name + ' wins. - with full house: ' + this.#players.player2.pokerHand.getSameKind() + ' over ' + this.#players.player2.pokerHand.getPairs()[0];
                break;
            case '4K':
                result = this.getPlayers().player2.name + ' wins. - with four of a kind: ' + this.#players.player2.pokerHand.getSameKind();
                break;
            case 'SF':
                result = this.getPlayers().player2.name + ' wins. - with straight flush: ' + this.#players.player2.pokerHand.getCards()[0];
                break;
            }
        }
        return result;
    }

    rankingPokerHand(cardsPlayer) {
        let rankPH;
        if (cardsPlayer.isStraightFlush()) {
            rankPH = 'SF';
        } else if (cardsPlayer.countSameKind(4) != 0) {
            rankPH = '4K';
        } else if (cardsPlayer.isFullHouse()) {
            rankPH = 'FH';
        } else if (cardsPlayer.isFlush()) {
            rankPH = 'FL';
        } else if (cardsPlayer.isStraight()) {
            rankPH = 'ST';
        } else if (cardsPlayer.countSameKind(3) != 0) {
            rankPH = '3K';
        } else if (cardsPlayer.countPairs(2) == 2) {
            rankPH = '2P';
        } else if (cardsPlayer.countPairs(1) == 1) {
            rankPH = 'PA';
        } else {
            rankPH = 'HC';
        }
        return rankPH;
    }

    getPlayers() {
        return this.#players;
    }
}