const WIDTH = 800;
const HEIGHT = 800;

const COLUMNS = 8;
const ROWS = 8;

const CELL_WIDTH = WIDTH / COLUMNS;
const CELL_HEIGHT = HEIGHT / ROWS;

const $canvas = document.createElement('canvas');
const context = $canvas.getContext('2d');

const theme = {
    light : '#eeeed2',
    dark : '#5F9EA0',
};

$canvas.width = WIDTH;
$canvas.height = HEIGHT;

context.textBaseline = 'middle';
context.textAlign = 'center';

const boardMatrix = [];
for (let ejex = 0; ejex < COLUMNS; ejex += 1) {
    boardMatrix[ejex] = [];
    for (let ejey = 0; ejey < ROWS; ejey += 1) {
        boardMatrix[ejex][ejey] = null;

        let rectColor = theme.light;
        let textColor = theme.dark;

        if ((ejex + ejey) % 2) {
            rectColor = theme.dark;
            textColor = theme.light;
        }

        context.fillStyle = rectColor;
        context.fillRect(ejex * CELL_WIDTH, ejey * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);

        context.fillStyle = textColor;
        context.fillText(`[${ejex}; ${ejey}]`, ejex * CELL_WIDTH + CELL_WIDTH / 2, ejey * CELL_HEIGHT + CELL_HEIGHT / 2);
    }
}

document.body.appendChild($canvas);