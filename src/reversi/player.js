
export class Player {
    #playerTag;

    constructor(playerTag) {
        this.#playerTag = playerTag;
        this.tokenCount = 28;
    }

    setToken(posX, posY) {
        this.tokenCount -= 1;
        return [posX, posY, this.tokenCount, this.#playerTag];
    }
}


