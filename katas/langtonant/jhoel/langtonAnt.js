
const { Color } = require('./colors.js');

const WHITE = 0;
const BLACK = 1;
const UP = 2;
const DOWN = 3;
const LEFT = 4;
const RIGHT = 5;

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


    constructor(order, color, /*Ant Position*/{ x, y }) {
        this.#grid = this.createGrid(order, color);
        this.#ant.x = x;
        this.#ant.y = y;
    }

    createGrid(order, color) {
        const grid = [];
        for (let i = 0; i < order; i++) {
            grid.push([]);
            for (let j = 0; j < order; j++) {
                grid[i].push(color);
            }
        }
        return grid;
    }

    async run(steps) {
        const time = 500;
        await this.waiting(time, 0);

        for (let step = 0; step < steps; step++) {
            await this.waiting(time, step);

            if (this.getAntSquare() == WHITE) {
                this.turnRight();
                await this.waiting(time, step);
                this.setAntSquare(BLACK);
            } else {
                this.turnLeft();
                await this.waiting(time, step);
                this.setAntSquare(WHITE);
            }
            this.moveForward();
            await this.waiting(time, step);
        }

        console.log('========================================');
    }

    waiting(time, step) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.clear();
                console.log(`Step ${step + 1} ${step == 0 ? ' (Initial State)' : ''}`);
                console.log('========================================');
                this.printOnConsole();
                resolve();
            }, time);
        });
    }

    getAntSquare() {
        return this.#grid[this.#ant.y][this.#ant.x];
    }

    setAntSquare(color) {
        this.#grid[this.#ant.y][this.#ant.x] = color;
    }

    turnRight() {
        switch (this.#ant.direction) {
        case UP:
            this.#ant.direction = RIGHT;
            break;
        case DOWN:
            this.#ant.direction = LEFT;
            break;
        case LEFT:
            this.#ant.direction = UP;
            break;
        case RIGHT:
            this.#ant.direction = DOWN;
            break;
        }
    }

    turnLeft() {
        switch (this.#ant.direction) {
        case UP:
            this.#ant.direction = LEFT;
            break;
        case DOWN:
            this.#ant.direction = RIGHT;
            break;
        case LEFT:
            this.#ant.direction = DOWN;
            break;
        case RIGHT:
            this.#ant.direction = UP;
            break;
        }
    }

    moveForward() {
        switch (this.#ant.direction) {
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

        if (this.#ant.x < 0 || this.#ant.y < 0 || this.#ant.x >= this.#grid.length || this.#ant.y >= this.#grid.length) {
            throw new Error('Ant out of grid');
        }
    }

    printOnConsole() {
        console.log(Color.BgGreen, Color.FgGreen, Array(this.#grid.length * 3 - 1).fill('-').join('') + Color.BgBlack);
        for (let row = 0; row < this.#grid.length; row++) {
            const rowi = this.#grid[row];
            const rowToPrint = [];
            for (let col = 0; col < rowi.length; col++) {
                rowToPrint.push(Color.BgGreen, ' ');

                const RIGHTARROW = '●➤';
                const LEFTARROW = '◀●';
                const UPARROW = '●⬆';
                const DOWNARROW = '●⬇';

                const direction = this.#ant.direction == UP ? UPARROW : this.#ant.direction == DOWN ? DOWNARROW : this.#ant.direction == LEFT ? LEFTARROW : RIGHTARROW;

                const text = (row == this.#ant.y && col == this.#ant.x) ? Color.FgRed + direction : '__';


                const element = rowi[col];
                rowToPrint.push((element == WHITE) ? (Color.BgWhite + Color.FgWhite + text) : (Color.BgBlack + Color.FgBlack + text));
            }

            rowToPrint.push(Color.BgGreen, ' ' + Color.BgBlack);
            console.log(rowToPrint.join(''));
            console.log(Color.BgGreen, Color.FgGreen, Array(rowi.length * 3 - 1).fill('-').join('') + Color.BgBlack);
        }

        console.log(Color.BgBlack, Color.FgWhite,);
    }
}

module.exports = LangtonAnt;