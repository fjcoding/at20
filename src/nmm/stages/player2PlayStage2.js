export function player2PlayStage2(prompt, grid, player1, player2, emptyPosition, rule1) {
    console.clear();
    console.log(grid.showGrid());
    let coins =  9 - player2.numberCoinsRemoved;
    console.log('\nPlayer ' + player2.colorPlayer + ' turn. (' + coins + ' coins to move)');
    console.log('Select a coin to move');
    let rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinate = parseInt(prompt('Enter the column coordinate '));
    let isYourcoin = player2.checkOwnCoin(grid.getSymbolCoinFromGrid(rowCoordinate, columnCoordinate));

    while (!isYourcoin) {
        console.clear();
        console.log(grid.showGrid());
        console.log('\nSelect another position\n');
        rowCoordinate = parseInt(prompt('Enter the row coordinate '));
        columnCoordinate = parseInt(prompt('Enter the column coordinate '));
        isYourcoin = player2.checkOwnCoin(grid.getSymbolCoinFromGrid(rowCoordinate, columnCoordinate));
    }

    console.log('\nSelect a new position\n');
    let rowCoordinateNew = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinateNew = parseInt(prompt('Enter the column coordinate '));
    //rules of the move
    let isNewPosition = !(rowCoordinateNew === rowCoordinate && columnCoordinateNew === columnCoordinate);
    let islegal = rule1.checkMove([rowCoordinate, columnCoordinate], [rowCoordinateNew, columnCoordinateNew]);
    let isEmpty = grid.checkAvailablePos(rowCoordinateNew, columnCoordinateNew);
    console.log(isNewPosition);
    console.log(islegal);
    console.log(isEmpty);

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

    grid.changeValueCoin(player2.colorPlayer, rowCoordinateNew, columnCoordinateNew);
    grid.changeValueCoin(emptyPosition, rowCoordinate, columnCoordinate);
    if (player2.isPositionInBagMills(rowCoordinate, columnCoordinate)) {
        player2.removeMillWhenCoinPositionIs(rowCoordinate + ',' + columnCoordinate);
    }
    console.clear();
    console.log(grid.showGrid());

    let hMill = grid.checkIfThereMills(player2.colorPlayer, rowCoordinateNew, columnCoordinateNew)[0];
    let vMill = grid.checkIfThereMills(player2.colorPlayer, rowCoordinateNew, columnCoordinateNew)[1];
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
            let posColDelete = parseInt(prompt('Enter the col coordinate '));
            while (!(player1.checkOwnCoin(grid.getSymbolCoinFromGrid(posRowDelete, posColDelete))) ||
                player1.isPositionInBagMills(posRowDelete, posColDelete)) {
                console.clear();
                console.log(grid.showGrid());
                console.log('\nSelect another coin\n');
                posRowDelete = parseInt(prompt('Enter the row coordinate '));
                posColDelete = parseInt(prompt('Enter the col coordinate '));
            }
            grid.changeValueCoin(emptyPosition, posRowDelete, posColDelete);
            player1.updateNumberCoinsRemoved();
        }
    }
}