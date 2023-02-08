export class Piece {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.typeChain = 'pawn';
    }

    currentlyPosition(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    getTypeChain() {
        return this.typeChain;
    }

    makeLady() {
        this.typeChain = 'lady';
    }
}