import { PokerHand } from "./pokerHand";

export class Play {
    #players;

    constructor(pokerHandsPlayers) {
        this.#players = {};
        let playersPH = pokerHandsPlayersl.split('  ');
        let valPlayer;
        let numPlayer;
        let countPlayers = 1;
        playersPH.forEach(player => {
            valPlayer = player.split(': ');
            numPlayer = 'player' + countPlayers;
            this.#players.numPlayer = {
                'name': valPlayer[0],
                'pokerHand': new PokerHand(valPlayer[1].split(' '))
            }
            countPlayers++;
        });
    }

    pokerHandsPlayers() {
        return this.getPlayers();
    }

    getPlayers() {
        return this.#players;
    }
}