export function creatGrid(gridSize) {
    var gridRow = new Array();
    for (let x = 0; x < gridSize; x++) {
        gridRow[x] = new Array();
        for (let y = 0; y < gridSize; y++) {
            gridRow[x][y] = 0;
        }
    }
    return gridRow;
}

export function ant(gridSize, steps) {
    var gridRow = creatGrid(gridSize);
    const WHITE = 0;
    const BLACK = 1;
    var direction = 'up';
    var positionX = Math.trunc(gridSize / 2);
    var positionY = Math.trunc(gridSize / 2);
    var color = WHITE;
    while (steps > 0) {
        if (positionX >= 0 && positionY >= 0) {
            if (color == WHITE) {
                gridRow[positionX][positionY] = 1;
                let right = newPositionRight(direction, positionX, positionY);
                positionX = right.x;
                positionY = right.y;
                color = gridRow[positionX][positionY];
                direction = antDirectionRight(direction);
            } else if (color == BLACK) {
                gridRow[positionX][positionY] = 0;
                let left = newPositionLeft(direction, positionX, positionY);
                positionX = left.x;
                positionY = left.y;
                color = gridRow[positionX][positionY];
                direction = antDirectionLeft(direction);
            }
            steps--;
        } else {
            steps = 0;
        }
    }
    return {positionX, positionY, color, direction, steps};
}

export function antDirectionRight (direction) {
    var newdirection = '';
    if (direction == 'up') {
        newdirection = 'right';
    } else if (direction == 'right') {
        newdirection = 'down';
    } else if (direction == 'down') {
        newdirection = 'left';
    } else if (direction == 'left') {
        newdirection = 'up';
    }
    return newdirection;
}
export function antDirectionLeft (direction) {
    var newdirection = '';
    if (direction == 'up') {
        newdirection = 'left';
    } else if (direction == 'right') {
        newdirection = 'up';
    } else if (direction == 'down') {
        newdirection = 'right';
    } else if (direction == 'left') {
        newdirection = 'down';
    }
    return newdirection;
}

export function newPositionRight(direction,  x, y) {
    if (direction == 'up') {
        y = y + 1;
    } else if (direction == 'right') {
        x = x + 1;
    } else if (direction == 'down') {
        y = y - 1;
    } else if (direction == 'left') {
        x = x - 1;
    }

    return { x, y};
}

export function newPositionLeft(direction, x, y) {
    if (direction == 'up') {
        y = y - 1;
    } else if (direction == 'right') {
        x = x - 1;
    } else if (direction == 'down') {
        y = y + 1;
    } else if (direction == 'left') {
        x = x + 1;
    }
    return {x, y};
}
ant(process.argv[2], process.argv[3]);