// create a grid
let grid = [];
for (let i = 0; i < 100; i++) {
    let row = [];
    for (let j = 0; j < 100; j++) {
        row.push(0);
    }
    grid.push(row);
}
// initial pos for the ant
let antRow = 50;
let antCol = 50;

// ant direction
let antDirection = "up";

// steps for the ant
for (let step = 0; step < 10000; step++) {
    // color cell
    let currentColor = grid[antRow][antCol];
    
    // change actual color of cell
    grid[antRow][antCol] = currentColor === 0 ? 1 : 0;
    
    // ant turn
    if (currentColor === 0) {
        if (antDirection === "up") {
            antDirection = "right";
        } else if (antDirection === "right") {
            antDirection = "down";
        } else if (antDirection === "down") {
            antDirection = "left";
        } else if (antDirection === "left") {
            antDirection = "up";
        }
    } else {
        if (antDirection === "up") {
            antDirection = "left";
        } else if (antDirection === "left") {
            antDirection = "down";
        } else if (antDirection === "down") {
            antDirection = "right";
        } else if (antDirection === "right") {
            antDirection = "up";
        }
    }
    
    // ant movement
    if (antDirection === "up") {
        antRow--;
    } else if (antDirection === "right") {
        antCol++;
    } else if (antDirection === "down") {
        antRow++;
    } else if (antDirection === "left") {
        antCol--;
    }
}