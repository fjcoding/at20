import { Action } from './action.js';

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

    action = new Action();

    get game() {
        return this.#game;
    }

    get name() {
        return this.#name;
    }

    get pieceColor() {
        return this.#pieceColor;
    }

    get pieces() {
        return this.#pieces;
    }

    set pieces(pieces) {
        this.#pieces = pieces;
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
        this.action.selectPiece(this, piecePosition);
    }

    movePiece(newPosition) {
        this.action.movePiece(this, newPosition);
    }

    killEnemyPiece(newPosition) {
        this.action.killEnemyPiece(this, newPosition);
    }
}
