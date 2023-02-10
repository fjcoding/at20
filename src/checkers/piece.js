export class Piece {
    #color;

    #x;

    #y;

    #typeChain;

    constructor(color, x, y) {
        this.#color = color;
        this.#x = x;
        this.#y = y;
        this.#typeChain = 'pawn';
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getColor() {
        return this.#color;
    }

    currentlyPosition(newX, newY) {
        this.#x = newX;
        this.#y = newY;
    }

    getTypeChain() {
        return this.#typeChain;
    }

    makeLady() {
        this.#typeChain = 'lady';
    }
}