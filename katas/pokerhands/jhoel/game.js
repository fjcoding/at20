import Hand from './hand.js';
import Player from './player.js';

class Game {
    static GAME_RESULT = {
        WIN: 'wins. - with',
        TIE: 'Tie.',
    };

    static SEPARATOR = '  ';

    #firstPlayer;

    #secondPlayer;

    constructor({ firstPlayer, secondPlayer } = {}) {
        this.#firstPlayer = firstPlayer;
        this.#secondPlayer = secondPlayer;
    }

    parse(strGame) {
        const strPlayers = {
            'firstPlayer': strGame.substring(0, strGame.indexOf(Game.SEPARATOR)),
            'secondPlayer': strGame.substring(strGame.indexOf(Game.SEPARATOR) + Game.SEPARATOR.length)
        };

        const Players = {
            'firstPlayer': new Player(),
            'secondPlayer': new Player()
        };

        for (const [player, strPlayer] of Object.entries(strPlayers)) {
            const playerName = strPlayer.substring(0, strPlayer.indexOf(':'));
            const playerHand = strPlayer.substring(strPlayer.indexOf(':') + 2);
            Players[player].setName(playerName);
            Players[player].setHand(playerHand);
        }

        this.#firstPlayer = Players.firstPlayer;
        this.#secondPlayer = Players.secondPlayer;
    }

    getTheWinner() {
        const firstPlayer = this.#firstPlayer;
        const secondPlayer = this.#secondPlayer;

        const firstPlayerHand = firstPlayer.getHand();
        const secondPlayerHand = secondPlayer.getHand();

        let winnerPlayer;
        if (firstPlayerHand.compareWith(secondPlayerHand) === Hand.WIN) {
            winnerPlayer = firstPlayer;
        } else if (firstPlayerHand.compareWith(secondPlayerHand) === Hand.LOSE) {
            winnerPlayer = secondPlayer;
        } else {
            return Game.GAME_RESULT.TIE;
        }

        return `${winnerPlayer.getName()} ${Game.GAME_RESULT.WIN} ${winnerPlayer.getHand().getRankString().toLowerCase()}: ${winnerPlayer.getHand().getWinnerCards()}`;
    }
}

export default Game;