import { positionOnBoard } from './positionOnBoard';
import { checkRowPossibleMovements } from './checkRowPossibleMovements';

export class checkBestMove {
    #grid;

    #player;

    constructor(grid, player) {
        this.#grid = grid;
        this.#player = player;
        this.bestMove();
    }

    bestMove() {
        var bestMovement=new checkRowPossibleMovements(this.#grid,this.#player)
        var move=bestMovement.asPossibleMovement();
        const result = [...move].sort((x,y) => y.Moves.length - x.Moves.length)[0]
        return result.play//play the computer is going to take
    }
}