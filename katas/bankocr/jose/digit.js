export class Digit {
    static ocrChain = {
        '   ' : {
            '  |' : {
                '  |' : 1
            },
            '|_|' : {
                '  |' : 4
            }
        },
        ' _ ' : {
            '| |' : {
                '|_|' : 0
            },
            ' _|' : {
                '|_ ' : 2,
                ' _|' : 3
            },
            '|_ ' : {
                ' _|' : 5,
                '|_|' : 6
            },
            '  |' : {
                '  |' : 7
            },
            '|_|' : {
                '|_|' : 8,
                ' _|' : 9
            }
        }
    };

    #topLine;

    #midLine;

    #botLine;

    constructor(topLine, midLine, botLine) {
        this.#topLine = topLine;
        this.#midLine = midLine;
        this.#botLine = botLine;
    }

    asNumber() {
        return Digit.ocrChain[this.#topLine][this.#midLine][this.#botLine];
    }

}

