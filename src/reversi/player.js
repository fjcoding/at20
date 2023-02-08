
export class Player {
    // #posX
    // #posY
    #playerTag;

    constructor(playerTag) {
        this.#playerTag = playerTag;
        //this.posX = posX;
        //this.posY = posY;
        this.tokenCount = 28;
    }

    setToken(posX, posY) {
        this.tokenCount -= 1;
        return [posX, posY, this.tokenCount, this.#playerTag];
    }
}


