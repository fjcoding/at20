export class Player {
    #colorPlayer;

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

    get propsPlayer() {
        return `${this.#colorPlayer}: ${this.#amountCoinsToPlay} coins to play and ${this.#amountCoinsPlayed} coins played`;
    }
}