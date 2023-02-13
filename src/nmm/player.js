export class Player {
    #colorPlayer;

    #numberCoinsToPlay;

    #numberCoinsRemoved;

    #bagMills;

    #previousBagMillsLength;

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
        this.#previousBagMillsLength = this.getLengthBagMills();
        if (!this.checkIfExistsMill(newMill)) {
            this.#bagMills.push(newMill);
        }
        return this.getLengthBagMills();
    }

    checkIfExistsMill(newMill) {
        let result = false;
        if (this.getLengthBagMills() > 0) {
            this.#bagMills.forEach(mill => {
                if (JSON.stringify(mill) === JSON.stringify(newMill)) {
                    result = true;
                }
            });
        }
        return result;
    }

    checkNewMillAdded() {
        return this.getLengthBagMills() > this.#previousBagMillsLength ? true : false;
    }

    get propsPlayer() {
        return `${this.#colorPlayer}: ${this.#numberCoinsToPlay} coins to play`;
    }
}