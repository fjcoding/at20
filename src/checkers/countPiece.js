export class CountPiece {
    constructor(totalPieces, lostPieces) {
        this.totalPieces = totalPieces;
        this.lostPieces = lostPieces;
    }

    getTotalPieces() {
        return this.totalPieces - this.lostPieces;
    }
}