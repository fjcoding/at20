// import { Grid } from './grid';

export class Player {
    #colorPlayer;

    #coins;

    #amountCoinsToPlay;

    #amountCoinsPlayed;

    constructor(colorPlayer, amountCoins) {
        this.#colorPlayer = colorPlayer;
        this.#amountCoinsToPlay = amountCoins;
        this.#amountCoinsPlayed = 0;
    }

    updateAmountCoins(usedCoins) {
        this.#amountCoinsToPlay -= usedCoins;
        this.#amountCoinsPlayed += usedCoins;
        return this.#amountCoinsToPlay;
    }

    get colorPlayer() {
        return this.colorPlayer;
    }

    get amountCoinsToPlay() {
        return this.#amountCoinsToPlay;
    }

    get amountCoinsPlayed() {
        return this.#amountCoinsPlayed;
    }

    get propsPlayer() {
        return `${this.#colorPlayer}: ${this.#amountCoinsToPlay} coins to play and ${this.#amountCoinsPlayed} coins played`;
    }
}