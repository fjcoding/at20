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

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get color() {
        return this.#color;
    }

    set x(x) {
        this.#x = x;
    }

    set y(y) {
        this.#y = y;
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