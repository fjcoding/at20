
let grid = [];
for (let i = 0; i < 100; i++) {
    let row = [];
    for (let j = 0; j < 100; j++) {
        row.push(0);
    }
    grid.push(row);
}
let antRow = 50;
let antCol = 50;
let antDirection = 'up';
for (let step = 0; step < 100; step++) {
    let currentColor = grid[antRow][antCol];
    grid[antRow][antCol] = currentColor === 0 ? 1 : 0;

    antDirection = findNewdirection(currentColor, antDirection);

    antDirection = antMoveCorrectDir(antDirection);
}

export function findNewdirection(currentColor, antDirection) {
    let newAntdirection = '';
    if (currentColor === 0) {
        if (antDirection === 'up') {
            newAntdirection = 'right';
        } else if (antDirection === 'right') {
            newAntdirection = 'down';
        } else if (antDirection === 'down') {
            newAntdirection = 'left';
        } else if (antDirection === 'left') {
            newAntdirection = 'up';
        }
    } else {
        if (antDirection === 'up') {
            newAntdirection = 'left';
        } else if (antDirection === 'left') {
            newAntdirection = 'down';
        } else if (antDirection === 'down') {
            newAntdirection = 'right';
        } else if (antDirection === 'right') {
            newAntdirection = 'up';
        }
    }
    return newAntdirection;
}

export function antMoveCorrectDir(antDirection) {
    let newAntcMove = 50;
    let newAntrMove = 50;
    if (antDirection === 'up') {
        newAntrMove--;
    } else if (antDirection === 'right') {
        newAntcMove++;
    } else if (antDirection === 'down') {
        newAntrMove++;
    } else if (antDirection === 'left') {
        newAntcMove--;
    }
    return newAntcMove, newAntrMove;
}