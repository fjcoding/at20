const WHITE = 0;
const BLACK = 1;
const UP = 2;
const DOWN = 3;
const LEFT = 4;
const RIGHT = 5;
const OUT_OF_BOUNDS_ERROR = new Error('The ant is out of bounds');

class LangtonAnt {
    static get BLACK() {
        return BLACK;
    }

    static get WHITE() {
        return WHITE;
    }

    static get UP() {
        return UP;
    }

    static get DOWN() {
        return DOWN;
    }

    static get LEFT() {
        return LEFT;
    }

    static get RIGHT() {
        return RIGHT;
    }

    #grid = [];

    #ant = { x: 0, y: 0, direction: UP };

    getAntPosition() {
        return { x: this.#ant.x, y: this.#ant.y };
    }

    setAntPosition({ x, y }) {
        this.#ant.x = x;
        this.#ant.y = y;
    }

    getAntDirection() {
        return this.#ant.direction;
    }

    setAntDirection(direction) {
        this.#ant.direction = direction;
    }

    getGrid() {
        return this.#grid;
    }

    getGridDimension() {
        return this.#grid.length;
    }

    getColorAntSquare() {
        return this.#grid[this.#ant.y][this.#ant.x];
    }

    constructor(order, color, antPosition) {
        this.createGrid(order, color);
        this.setAntPosition(antPosition);
    }


    createGrid(order, color) {
        const grid = [];
        for (let i = 0; i < order; i++) {
            grid.push([]);
            for (let j = 0; j < order; j++) {
                grid[i].push(color);
            }
        }
        this.#grid = grid;
    }

    turnAnt(color) {
        if (color == WHITE) {
            this.turnAntRight();
        } else {
            this.turnAntLeft();
        }
    }


    setColorAntSquare(color) {
        const newColor = color == WHITE ? BLACK : WHITE;
        this.#grid[this.#ant.y][this.#ant.x] = newColor;
    }

    turnAntRight() {
        switch (this.getAntDirection()) {
        case UP:
            this.setAntDirection(RIGHT);
            break;
        case DOWN:
            this.setAntDirection(LEFT);
            break;
        case LEFT:
            this.setAntDirection(UP);
            break;
        case RIGHT:
            this.setAntDirection(DOWN);
            break;
        }
    }

    turnAntLeft() {
        switch (this.getAntDirection()) {
        case UP:
            this.setAntDirection(LEFT);
            break;
        case DOWN:
            this.setAntDirection(RIGHT);
            break;
        case LEFT:
            this.setAntDirection(DOWN);
            break;
        case RIGHT:
            this.setAntDirection(UP);
            break;
        }
    }

    moveAntForward() {
        switch (this.getAntDirection()) {
        case UP:
            this.#ant.y--;
            break;
        case DOWN:
            this.#ant.y++;
            break;
        case LEFT:
            this.#ant.x--;
            break;
        case RIGHT:
            this.#ant.x++;
            break;
        }

        if (!this.isAntValidPosition(this.getAntPosition())) {
            throw OUT_OF_BOUNDS_ERROR;
        }
    }


    isAntValidPosition({ x, y }) {
        return x >= 0 && y >= 0 && x < this.#grid.length && y < this.#grid.length;
    }
}

export default LangtonAnt;