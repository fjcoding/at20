import {getPiecesToFlip} from './getPiecesToFlip.js';
import { positionOnBoard } from '../../board/positionOnBoard.js';
import {possibleMoves} from './checkPossibleMoves.js';
export class RowInspector {

    #positionOnBoard=new positionOnBoard();

    /*constructor(position, grid, player) {
        this.#grid = grid;
        this.#position = position;
        this.#player = player;
        this.checkRow();
    }*/
    get positionOnBoard() {
        return this.#positionOnBoard;
    }

    checkRow(position,grid,player) {
        var checkPiecesToFlip = [];
        var piecesToFlip = new getPiecesToFlip();
        var piecesToflipToRigth = piecesToFlip.getPiecesToFlipRigth(position, grid, player);
        var piecesToflipToLeft = piecesToFlip.getPiecesToFlipLeft(position, grid, player);
        checkPiecesToFlip = checkPiecesToFlip.concat(piecesToflipToRigth, piecesToflipToLeft);
        return checkPiecesToFlip;
    }

    checkPossibleMoves(boardTocheck, player) {//row
        var possibleMove = new possibleMoves();
        var lefMovements = possibleMove.possibleMovesToLeft(boardTocheck, player);
        var rightMovements = possibleMove.possibleMovesToRight(boardTocheck, player);
        var PossibleMovements = [];
        PossibleMovements = PossibleMovements.concat(lefMovements, rightMovements);
        return PossibleMovements;
    }
}