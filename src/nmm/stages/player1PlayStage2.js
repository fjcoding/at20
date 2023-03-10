export function player1PlayStage2(prompt, grid, player1, player2, emptyPosition, rule1) {
    console.clear();
    console.log(grid.showGrid());
    let coins =  9 - player1.numberCoinsRemoved;
    console.log('\nPlayer ' + player1.colorPlayer + ' turn. (' + coins + ' coins to move)');
    console.log('Select a coin to move');
    let rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinate = parseInt(prompt('Enter the column coordinate '));
    let isYourcoin = player1.checkOwnCoin(grid.getSymbolCoinFromGrid(rowCoordinate, columnCoordinate));

    while (!isYourcoin) {
        console.clear();
        console.log(grid.showGrid());
        console.log('\nSelect another position\n');
        rowCoordinate = parseInt(prompt('Enter the row coordinate '));
        columnCoordinate = parseInt(prompt('Enter the column coordinate '));
        isYourcoin = player1.checkOwnCoin(grid.getSymbolCoinFromGrid(rowCoordinate, columnCoordinate));
    }

    console.log('\nSelect a new position\n');
    let rowCoordinateNew = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinateNew = parseInt(prompt('Enter the column coordinate '));
    //rules of the move
    let isNewPosition = !(rowCoordinateNew === rowCoordinate && columnCoordinateNew === columnCoordinate);
    let islegal = rule1.checkMove([rowCoordinate, columnCoordinate], [rowCoordinateNew, columnCoordinateNew]);
    let isEmpty = grid.checkAvailablePos(rowCoordinateNew, columnCoordinateNew);

    while (!(isNewPosition && islegal && isEmpty)) {
        console.clear();
        console.log(grid.showGrid());
        console.log('\nSelect another position\n');
        rowCoordinateNew = parseInt(prompt('Enter the row coordinate '));
        columnCoordinateNew = parseInt(prompt('Enter the column coordinate '));
        isNewPosition = !(rowCoordinateNew === rowCoordinate && columnCoordinateNew === columnCoordinate);
        islegal = rule1.checkMove([rowCoordinate, columnCoordinate], [rowCoordinateNew, columnCoordinateNew]);
        isEmpty = grid.checkAvailablePos(rowCoordinateNew, columnCoordinateNew);
    }

    grid.changeValueCoin(player1.colorPlayer, rowCoordinateNew, columnCoordinateNew);
    grid.changeValueCoin(emptyPosition, rowCoordinate, columnCoordinate);
    if (player1.isPositionInBagMills(rowCoordinate, columnCoordinate)) {
        player1.removeMillWhenCoinPositionIs(rowCoordinate + ',' + columnCoordinate);
    }
    console.clear();
    console.log(grid.showGrid());

    let hMill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinateNew, columnCoordinateNew)[0];
    let vMill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinateNew, columnCoordinateNew)[1];
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
            player2.updateNumberCoinsRemoved();
            grid.changeValueCoin(emptyPosition, posRowDelete, posColDelete);
        }
    }
}