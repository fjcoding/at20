export class Piece {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.queen = false;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    isQueen() {
        return this.queen;
    }

    makeQueen() {
        this.queen = true;
    }
}
