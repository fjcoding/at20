export class grid {
    WIDTH = 800;
    HEIGHT = 800;

    COLUMNS = 8;
    ROWS = 8;

    CELL_WIDTH = WIDTH / COLUMNS;
    CELL_HEIGHT = HEIGHT / ROWS;

    theme = {
        light : '#eeeed2',
        dark : '#5F9EA0',
    };

    constructor ($canvas, context){
        $canvas = document.createElement('canvas');
        context = $canvas.getContext('2d');

        $canvas.width = WIDTH;
        $canvas.height = HEIGHT;

        context.textBaseline = 'middle';
        context.textAlign = 'center';

        document.body.appendChild($canvas);
    }
    
    startGrid () {
        const boardMatrix = [];
        for (let ejeX = 0; ejeX < COLUMNS; ejex += 1) {
            boardMatrix[ejeX] = [];
            for (let ejeY = 0; ejeY < ROWS; ejeY += 1) {
                boardMatrix[ejeX][ejeY] = null;

                let rectColor = theme.light;
                let textColor = theme.dark;

                if ((ejeX + ejeY) % 2) {
                    rectColor = theme.dark;
                    textColor = theme.light;
                }

                context.fillStyle = rectColor;
                context.fillRect(ejeX * CELL_WIDTH, ejeY * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);

                context.fillStyle = textColor;
                context.fillText(`[${ejeX}; ${ejeY}]`, ejeX * CELL_WIDTH + CELL_WIDTH / 2, ejeY * CELL_HEIGHT + CELL_HEIGHT / 2);
            }
        }
    }
}