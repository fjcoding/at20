export class Player {
    #colorPlayer;

    #numberCoinsToPlay;

    #numberCoinsRemoved;

    #bagMills;

    constructor(colorPlayer) {
        this.#colorPlayer = colorPlayer;
        this.#numberCoinsToPlay = 9;
        this.#numberCoinsRemoved = 0;
        this.#bagMills = [];
    }

    get colorPlayer() {
        return this.#colorPlayer;
    }

    get numberCoinsToPlay() {
        return this.#numberCoinsToPlay;
    }

    get numberCoinsRemoved() {
        return this.#numberCoinsRemoved;
    }

    updateNumberCoinsToPlay() {
        return this.#numberCoinsToPlay = this.#numberCoinsToPlay - 1;
    }

    getLengthBagMills() {
        return this.#bagMills.length;
    }

    addMill(newMill) {
        this.#bagMills.push(newMill);
        return this.getLengthBagMills();
    }

    get propsPlayer() {
        return `${this.#colorPlayer}: ${this.#numberCoinsToPlay} coins to play`;
    }
}