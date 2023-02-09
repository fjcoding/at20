export class Grid {
    #gridInit;

    constructor () {
        this.#gridInit = [
            ['*', '-', '-', '*', '-', '-', '*'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['|', '|', '*', '*', '*', '|', '|'],
            ['*', '*', '*', ' ', '*', '*', '*'],
            ['|', '|', '*', '*', '*', '|', '|'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
    }

    get gridInit() {
        return this.#gridInit;
    }

    set gridInit(gridNew) {
        this.#gridInit = gridNew;
    }
}