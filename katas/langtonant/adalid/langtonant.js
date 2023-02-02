const positionInGrid = ({ direction, currentPos, posX, posY, matriz }) => {
    const BLACK = 0;
    const WHITE = 1;
    const UP = 'U';
    const RIGHT = 'R';
    const LEFT = 'L';
    const DOWN = 'D';

    switch (direction) {
    case UP:
        if (currentPos === BLACK) {
            posY--;
            currentPos = WHITE;
            currentPos = matriz[posX][posY];
            direction = LEFT;
        } else
        if (currentPos === WHITE) {
            posY++;
            currentPos = BLACK;
            currentPos = matriz[posX][posY];
            direction = RIGHT;
        }
        break;
    case LEFT:
        if (currentPos === BLACK) {
            posX++;
            currentPos = WHITE;
            currentPos = matriz[posX][posY];
            direction = DOWN;
        } else
        if (currentPos === WHITE) {
            posX--;
            currentPos = BLACK;
            currentPos = matriz[posX][posY];
            direction = UP;
        }
        break;
    case RIGHT:
        if (currentPos === BLACK) {
            posX--;
            currentPos = WHITE;
            currentPos = matriz[posX][posY];
            direction = UP;
        } else
        if (currentPos === WHITE) {
            posX++;
            currentPos = BLACK;
            currentPos = matriz[posX][posY];
            direction = DOWN;
        }
        break;
    case DOWN:
        if (currentPos === BLACK) {
            posY++;
            currentPos = WHITE;
            currentPos = matriz[posX][posY];
            direction = RIGHT;
        } else
        if (currentPos === WHITE) {
            posY--;
            currentPos = BLACK;
            currentPos = matriz[posX][posY];
            direction = LEFT;
        }
        break;
    default:
        break;
    }
    return { posX, posY, direction };
};

const antSteps = (steps, matriz, direction, posX, posY, currentPos) =>{
    let mutatedVariables = { matriz, direction, posX, posY, currentPos };

    while (steps > 0) {
        const newPositions = positionInGrid(mutatedVariables);
        Object.assign(mutatedVariables, newPositions);
        steps--;
    }
    return mutatedVariables;
};
export {positionInGrid, antSteps};
