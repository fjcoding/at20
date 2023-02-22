export function player1PlayStage1(prompt, grid, player1, player2, emptyPosition) {
    console.clear();
    console.log(grid.showGrid());
    console.log('\nPlayer ' + player1.colorPlayer + ' turn. (' + player1.numberCoinsToPlay + ' coins to play)');
    let rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinate = parseInt(prompt('Enter the column coordinate '));
    let isEmpty = grid.checkAvailablePos(rowCoordinate, columnCoordinate);

    while (!isEmpty) {
        console.clear();
        console.log(grid.showGrid());
        console.log('\nSelect another position\n');
        rowCoordinate = parseInt(prompt('Enter the row coordinate '));
        columnCoordinate = parseInt(prompt('Enter the column coordinate '));
        isEmpty = grid.checkAvailablePos(rowCoordinate, columnCoordinate);
    }

    grid.changeValueCoin(player1.colorPlayer, rowCoordinate, columnCoordinate);
    player1.updateNumberCoinsToPlay();
    let hMill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinate, columnCoordinate)[0];
    let vMill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinate, columnCoordinate)[1];
    if (hMill.length > 0 || vMill.length > 0) {
        if (hMill.length > 0) {
            player1.addMill(hMill);
        }
        if (vMill.length > 0) {
            player1.addMill(vMill);
        }
        if (player1.checkNewMillAdded()) {
            console.clear();
            console.log(grid.showGrid());
            console.log('Delete a coin...');
            let posRowDelete = parseInt(prompt('Enter the row coordinate '));
            let posColDelete = parseInt(prompt('Enter the col coordinate '));
            while (!(player2.checkOwnCoin(grid.getSymbolCoinFromGrid(posRowDelete, posColDelete))) ||
                player2.isPositionInBagMills(posRowDelete, posColDelete)) {
                console.clear();
                console.log(grid.showGrid());
                console.log('\nSelect another coin\n');
                posRowDelete = parseInt(prompt('Enter the row coordinate '));
                posColDelete = parseInt(prompt('Enter the col coordinate '));
            }
            grid.changeValueCoin(emptyPosition, posRowDelete, posColDelete);
            player2.updateNumberCoinsRemoved();
        }
    }
}