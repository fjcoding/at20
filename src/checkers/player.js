import { action } from './action.js';

export class Player {
    #name;

    #pieces;

    #pieceColor;

    #pieceSelected;

    #game;

    constructor(name, pieceColor, pieces, game) {
        this.#game = game;
        this.#name = name;
        this.#pieceColor = pieceColor;
        this.#pieces = pieces;
        this.#pieceSelected = null;
    }

    get game() {
        return this.#game;
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
        action.selectPiece(this, piecePosition);
    }

    movePiece(newPosition) {
        action.movePiece(this, newPosition);
    }
}
