export class CountPiece {
    #totalPieces;

    #lostPieces;

    constructor(totalPieces, lostPieces) {
        this.#totalPieces = totalPieces;
        this.#lostPieces = lostPieces;
    }

    getTotalPieces() {
        return this.#totalPieces - this.#lostPieces;
    }
}