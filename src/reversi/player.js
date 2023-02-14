export class Player {
    #playerTag;

    #tokenCount;

    constructor(playerTag) {
        this.#playerTag = playerTag;
        this.#tokenCount = 28;
    }

    setToken(posX, posY) {
        this.#tokenCount -= 1;
        return [posX, posY];
    }

    get tokenCount() {
        return this.#tokenCount;
    }

    get playerTag() {
        return this.#playerTag;
    }

    // set playerTag(playerTag) {
    //     this.#playerTag = playerTag;
    // }
}