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

    get bagMills() {
        return this.#bagMills;
    }

    updateNumberCoinsToPlay() {
        return this.#numberCoinsToPlay = this.#numberCoinsToPlay - 1;
    }

    updateNumberCoinsRemoved() {
        return this.#numberCoinsRemoved = this.#numberCoinsRemoved + 1;
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
        let exist = false;
        if (this.getLengthBagMills() > 0) {
            this.#bagMills.forEach(mill => {
                if (JSON.stringify(mill) === JSON.stringify(newMill)) {
                    exist = true;
                }
            });
        }
        return exist;
    }

    checkNewMillAdded() {
        return this.getLengthBagMills() > this.#previousBagMillsLength ? true : false;
    }

    choosePositionToRemove(player2, coinPositionSelected) {
        player2.updateNumberCoinsRemoved();
        return coinPositionSelected;
    }

    removeMillWhenCoinPositionIs(coinPosition) {
        let auxBagMills = [];
        let auxMill = [];
        if (this.getLengthBagMills() > 0) {
            for (let index1 = 0; index1 < this.getLengthBagMills(); index1++) {
                auxMill = this.#bagMills.pop();
                if (auxMill.indexOf(coinPosition) == -1) {
                    auxBagMills.push(auxMill);
                }
            }
            this.#bagMills = auxBagMills;
            this.#previousBagMillsLength = this.getLengthBagMills();
        }
        return this.getLengthBagMills();
    }

    get propsPlayer() {
        return `${this.#colorPlayer}: ${this.#numberCoinsToPlay} coins to play`;
    }
}