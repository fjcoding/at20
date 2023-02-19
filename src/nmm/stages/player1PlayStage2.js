export function player1PlayStage2(prompt, grid, player1, player2, emptyPosition, rule1) {
    console.clear();
    console.log(grid.showGrid());
    let coins =  player1.numberCoinsToPlay - player1.numberCoinsRemoved;
    console.log('\nPlayer ' + player1.colorPlayer + ' turn. (' + coins + ' coins to play)');
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
    console.clear();
    console.log(grid.showGrid());

    let mill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinateNew, columnCoordinateNew);
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
            player2.updateNumberCoinsRemoved();
            grid.changeValueCoin(emptyPosition, posRowDelete, posColDelete);
        }
    }
}