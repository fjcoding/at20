
import { ant } from './ant.js';
import { grid } from './grid.js';

let initialPosition = [1, 1]; // initial position for the ant
let initialDirection = 'up'; // initial direction for the ant (up,down,right,left)
let defaultColor = '0'; // Defualt color for the grid string (0 = white 1 = black)
let sizeGrid  = 4; // size for the grid string (NxN)
let step  = 18; // step for the ant

let ant1 = new ant(initialPosition, initialDirection);
let grid1 = new grid(defaultColor, sizeGrid, initialPosition);


export function handleError(currentPosition) {
    for (const element of currentPosition) {
        if (element < 0) {
            return 'ant is outside of the grid';
        } else if (element >= sizeGrid) {
            return 'ant is outside of the grid';
        }
    }
    return 1;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function main() {
    console.log('STEP 0');
    grid1.show();
    console.log('Direction:', ant1.directionAnt, '||', 'Color:', grid1.getColor());
    console.log('-----------------');
    await delay(1000);
    console.clear();
    for (let i = 0; i < step; i++) {
        console.log('STEP', i + 1);
        ant1.move(grid1.getColor());

        if (handleError(ant1.positionAnt) === 1) {
            grid1.track(ant1.positionAnt);
            grid1.show();
            console.log('Direction:', ant1.directionAnt, '||', 'Color:', grid1.getColor());
            console.log('-----------------');
            await delay(1000);
            console.clear();
        } else {
            console.log(handleError(ant1.positionAnt));
            console.log('-----------------');
            await delay(1000);
            console.clear();
        }
    }
}

main();
