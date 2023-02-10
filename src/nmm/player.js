export class Player {
    #colorPlayer;

    #numberCoins;

    constructor(colorPlayer) {
        this.#colorPlayer = colorPlayer;
        this.#numberCoins = 9;
    }

    get colorPlayer() {
        return this.#colorPlayer;
    }

    set colorPlayer(newColorPlayer) {
        this.#colorPlayer = newColorPlayer;
    }

    get numberCoins() {
        return this.#numberCoins;
    }

    updateNumberCoins() {
        return this.#numberCoins = this.#numberCoins - 1;
    }

    get propsPlayer() {
        return `${this.#colorPlayer}: ${this.#numberCoins} coins to play`;
    }
}