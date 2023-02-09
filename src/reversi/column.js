export class Column {
    #gridYmax = 8;

    constructor(newToken, grid) {
        this.newToken = newToken;
        this.grid = grid;
    }

    checkColumn() {
        let ntxCoor = this.newToken[0];
        let ntyCoor = this.newToken[1];
        let ntValue = this.newToken[3];//
        let newColumns = [];

        for (let keyf = 0; keyf < this.#gridYmax; keyf++) {
            if ((ntValue == this.grid[keyf][ntyCoor]) && (keyf != ntxCoor)) {// assuming that the token has already been palced,
                newColumns.push([[ntxCoor, ntyCoor], [keyf, ntyCoor], ntValue]);// for the flip function // return the coordinates to flip the values in that tange
            }
        }
        return newColumns;
    }

    flipColumn (columnCords) {
        console.log(columnCords.length);
        for (let i = 0; i < columnCords.length; i++) {
            for (let j = 0; j < this.#gridYmax; j++) {
                if (this.grid[j][columnCords[i][1]]) {

                }
            }
        }
        return 0;
    }
}