// const dimension = parseInt(prompt('Enter the dimension of the grid: '));
// const nSteps = parseInt(prompt('Enter number of steps: '));
// const speed = parseInt(prompt('Enter speed (millisecond): '));

const dimension = 30;
const nSteps = 100;
const speed = 200;


let initialPosition;
let antPosition;
let pointerCell;
let directionPainted;
var document;

function createGrid() {
    let body = document.getElementsByTagName('body')[0];
    let bodyGrid = document.createElement('table');
    let tableBody = document.createElement('tbody');

    let cellNumber = 1;
    let cellMiddle = dimension % 2 == 0 ? (dimension * dimension) / 2 - (dimension / 2) + 1 : (dimension * dimension) / 2 + 0.5;

    initialPosition = cellMiddle;
    let cellPainted = 0;
    let cellColor = 'white';

    for (let i = 0; i < dimension; i++) {
        let gridRow = document.createElement('tr');
        for (let j = 0; j < dimension; j++) {
            let cell = document.createElement('td');
            let cellContent = document.createElement('div');
            cellContent.style = 'padding: 10px; background: ' + cellColor;
            cellContent.setAttribute('data-painted', cellPainted);
            let cellDirection = cellMiddle == cellNumber ? 'r' : '';
            cellContent.setAttribute('data-direction', cellDirection);
            cellContent.id = 'c' + cellNumber;
            cell.appendChild(cellContent);
            gridRow.appendChild(cell);
            cellNumber++;
        }
        tableBody.appendChild(gridRow);
    }

    bodyGrid.appendChild(tableBody);
    bodyGrid.setAttribute('border', '1');
    body.appendChild(bodyGrid);
}

function langtonAntStart() {
    antPosition = document.getElementById(`c${initialPosition}`);
    pointerCell = initialPosition;
    let steps = nSteps;

    const timer = setInterval(() => {
        let changeColor = 'white';
        let paintCell = 0;
        if (antPosition.getAttribute('data-painted') == 0) {
            changeColor = 'black';
            paintCell = 1;
        }
        antPosition.setAttribute('style', 'background: ' + changeColor + '; padding: 10px;');
        antPosition.setAttribute('data-painted', paintCell);
        let direction = antPosition.getAttribute('data-direction');
        directionNextStep(direction);
        steps--;
        if (steps == 0) {
            clearInterval(timer);
        }
    }, speed);
}

function directionNextStep(direction) {
    switch (direction) {
    case 'u':
        pointerCell -= dimension;
        directionPainted = document.getElementById(`c${pointerCell}`).getAttribute('data-painted') == 0 ? 'r' : 'l';
        document.getElementById(`c${pointerCell}`).setAttribute('data-direction', directionPainted);
        break;
    case 'd':
        pointerCell += dimension;
        directionPainted = document.getElementById(`c${pointerCell}`).getAttribute('data-painted') == 0 ? 'l' : 'r';
        document.getElementById(`c${pointerCell}`).setAttribute('data-direction', directionPainted);
        break;
    case 'r':
        pointerCell++;
        directionPainted = document.getElementById(`c${pointerCell}`).getAttribute('data-painted') == 0 ? 'd' : 'u';
        document.getElementById(`c${pointerCell}`).setAttribute('data-direction', directionPainted);
        break;
    case 'l':
        pointerCell--;
        directionPainted = document.getElementById(`c${pointerCell}`).getAttribute('data-painted') == 0 ? 'u' : 'd';
        document.getElementById(`c${pointerCell}`).setAttribute('data-direction', directionPainted);
        break;
    }
    antPosition = document.getElementById(`c${pointerCell}`);
}

createGrid();
langtonAntStart();