import {getPiecesToFlip} from './getPiecesToFlip.js';
export class RowInspector {
    #grid;

    #x;

    #y;

    #player;

    #position;

    constructor(position, grid, player) {
        this.#grid = grid;
        this.#position = position;
        this.#player = player;
        this.checkRow();
    }

    checkRow() {
        var checkPiecesToFlip = [];
        var piecesToFlip = new getPiecesToFlip();
        var piecesToflipToRigth = piecesToFlip.getPiecesToFlipRigth(this.#position, this.#grid, this.#player);
        var piecesToflipToLeft = piecesToFlip.getPiecesToFlipLeft(this.#position, this.#grid, this.#player);
        checkPiecesToFlip = checkPiecesToFlip.concat(piecesToflipToRigth, piecesToflipToLeft);
        return checkPiecesToFlip;
    }
}