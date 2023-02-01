
// Function to initialize the grid with all cells set to white
export function initializeGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(0);
        }
        grid.push(row);
    }
    return grid;
}

// Function to turn the ant 90 degrees to the right or left
export function turn(currentDirection, turnDirection) {
    let newDirection;
    if (turnDirection === 'right') {
        newDirection = (currentDirection + 90) % 360;
    } else {
        newDirection = (currentDirection - 90 + 360) % 360;
    }
    return newDirection;
}

// Function to move the ant one step forward in the current direction
export function move(currentPosition, currentDirection) {
    let newPosition = [...currentPosition];
    if (currentDirection === 0) {
        newPosition[0]--;
    } else if (currentDirection === 90) {
        newPosition[1]++;
    } else if (currentDirection === 180) {
        newPosition[0]++;
    } else {
        newPosition[1]--;
    }
    return newPosition;
}

// Function to run Langton's Ant simulation
export function runLangtonAnt(size, steps) {
    let grid = initializeGrid(size);
    let currentPosition = [Math.floor(size / 2), Math.floor(size / 2)];
    let currentDirection = 0;
    for (let step = 0; step < steps; step++) {
        const currentColor = grid[currentPosition[0]][currentPosition[1]];
        if (currentColor === 0) {
            grid[currentPosition[0]][currentPosition[1]] = 1;
            currentDirection = turn(currentDirection, 'right');
        } else {
            grid[currentPosition[0]][currentPosition[1]] = 0;
            currentDirection = turn(currentDirection, 'left');
        }
        currentPosition = move(currentPosition, currentDirection);
    }
    return grid;
}

// Example usage
const grid = runLangtonAnt(5, 10);
console.log(grid);

