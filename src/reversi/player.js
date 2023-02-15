export class Player {
    #playerTag;

    #tokenCount;

    constructor(playerTag) {
        this.#playerTag = playerTag;
        this.#tokenCount = 28;
    }

    setToken(posX, posY) {
        return [posX, posY];
    }

    discount () {
        this.#tokenCount -= 1;
    }

    get tokenCount() {
        return this.#tokenCount;
    }

    get playerTag() {
        return this.#playerTag;
    }
}