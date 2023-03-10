export class Coins {
    #symbol;

    #state;

    constructor(symbol) {
        this.#symbol = symbol;

        if (symbol === '*') {
            this.#state = 'active';
        } else {
            this.#state = 'inactive';
        }
    }

    get symbol() {
        return this.#symbol;
    }

    changeSymbolCoin(newSymbol) {
        this.#symbol = newSymbol;
    }

    get state() {
        return this.#state;
    }
}
