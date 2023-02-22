export function player2PlayStage1(prompt, grid, player1, player2, emptyPosition) {
    console.clear();
    console.log(grid.showGrid());
    console.log('\nPlayer ' + player2.colorPlayer + ' turn. (' + player2.numberCoinsToPlay + ' coins to play)');
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

    grid.changeValueCoin(player2.colorPlayer, rowCoordinate, columnCoordinate);
    player2.updateNumberCoinsToPlay();
    let hMill = grid.checkIfThereMills(player2.colorPlayer, rowCoordinate, columnCoordinate)[0];
    let vMill = grid.checkIfThereMills(player2.colorPlayer, rowCoordinate, columnCoordinate)[1];
    if (hMill.length > 0 || vMill.length > 0) {
        if (hMill.length > 0) {
            player2.addMill(hMill);
        }
        if (vMill.length > 0) {
            player2.addMill(vMill);
        }
        if (player2.checkNewMillAdded()) {
            console.clear();
            console.log(grid.showGrid());
            console.log('Delete a coin...');
            let posRowDelete = parseInt(prompt('Enter the row coordinate '));
            let posColDelete = parseInt(prompt('Enter the row coordinate '));
            while (!(player1.checkOwnCoin(grid.getSymbolCoinFromGrid(posRowDelete, posColDelete)))) {
                console.clear();
                console.log(grid.showGrid());
                console.log('\nSelect another coin\n');
                posRowDelete = parseInt(prompt('Enter the row coordinate '));
                posColDelete = parseInt(prompt('Enter the row coordinate '));
            }
            grid.changeValueCoin(emptyPosition, posRowDelete, posColDelete);
            player1.updateNumberCoinsRemoved();
        }
    }
}