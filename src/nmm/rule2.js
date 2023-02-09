import { positions } from './possiblePositions.js';
export class rule2 {
    #possiblePositions;

    constructor() {
        this.#possiblePositions = positions;
    }

    a0Options(newPosition) {
        const option2 =  [positions.a3.row, positions.a3.col].join();
        const option1 =  [positions.d0.row, positions.d0.col].join();
        if (newPosition.join() == option2 || newPosition.join() == option1) {
            return true;
        }
        return false;
    }

    a3Options(newPosition) {
        const option1 =  [positions.a6.row, positions.a6.col].join();
        const option2 =  [positions.a0.row, positions.a0.col].join();
        const option3 =  [positions.b3.row, positions.b3.col].join();
        if (newPosition.join() === option1 || newPosition.join() === option2 || newPosition.join() === option3) {
            return true;
        }
        return false;
    }

    a6Options(newPosition) {
        const option1 =  [positions.d6.row, positions.d6.col].join();
        const option2 =  [positions.a3.row, positions.a3.col].join();
        if (newPosition.join() === option1 || newPosition.join() === option2) {
            return true;
        }
        return false;
    }

    d6Options(newPosition) {
        const option1 =  [positions.g6.row, positions.g6.col].join();
        const option2 =  [positions.a6.row, positions.a6.col].join();
        const option3 =  [positions.d5.row, positions.d5.col].join();
        if (newPosition.join() === option1 || newPosition.join() === option2 || newPosition.join() === option3) {
            return true;
        }
        return false;
    }

    g6Options(newPosition) {
        const option1 =  [positions.d6.row, positions.d6.col].join();
        const option2 =  [positions.g3.row, positions.g3.col].join();
        if (newPosition.join() === option1 || newPosition.join() === option2) {
            return true;
        }
        return false;
    }
}