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
    let mill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinate, columnCoordinate);
    if (mill.length > 0) {
        player1.addMill(mill);
        if (player1.checkNewMillAdded()) {
            console.clear();
            console.log(grid.showGrid());
            console.log('Delete a coin...');
            let posRowDelete = parseInt(prompt('Enter the row coordinate '));
            let posColDelete = parseInt(prompt('Enter the row coordinate '));
            while (!(player2.checkOwnCoin(grid.getSymbolCoinFromGrid(posRowDelete, posColDelete)))) {
                console.clear();
                console.log(grid.showGrid());
                console.log('\nSelect another coin\n');
                posRowDelete = parseInt(prompt('Enter the row coordinate '));
                posColDelete = parseInt(prompt('Enter the row coordinate '));
            }
            grid.changeValueCoin(emptyPosition, posRowDelete, posColDelete);
            player2.updateNumberCoinsRemoved();
        }
    }
}