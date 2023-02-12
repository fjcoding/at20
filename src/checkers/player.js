import { Action } from './action.js';
export class Player {
    // Private fields
    #name;

    #pieces;

    #pieceColor;

    #pieceSelected;

    constructor(name, pieceColor, pieces) {
        this.#name = name;
        this.#pieceColor = pieceColor;
        this.#pieces = pieces;
        this.#pieceSelected = null;
    }

    get name() {
        return this.#name;
    }

    get pieceColor() {
        return this.#pieceColor;
    }

    get pieceSelected() {
        return this.#pieceSelected;
    }

    set pieceSelected(piece) {
        this.#pieceSelected = piece;
    }

    getPiece(piecePosition) {
        return this.#pieces.get(piecePosition);
    }

    selectPiece(piecePosition) {
        Action.selectPiece(this, piecePosition);
    }

    movePiece(newPosition) {
        Action.movePiece(this, newPosition);
    }
}