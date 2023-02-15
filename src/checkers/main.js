import { Player } from './player.js';
import { Game } from './game.js';
import * as ReadLine from 'readline';
import { stdin as input, stdout as output } from 'node:process';

console.clear();

const askAndRead = (text) => new Promise(resolve => {
    const readLine = ReadLine.createInterface({ input, output });

    readLine.question(text, (data) => {
        readLine.close();
        resolve(data);
    });
}
);

const main = async () => {
    let name1, name2;
    let color;
    let posX, posY, x1, y1;
    const game = new Game();

    console.log('WELCOME TO CHECKERS GAME');
    console.log('========================================');

    console.log('FIRST PLAYER');
    name1 = await askAndRead('Introduce a name for the FIRST player => ');
    color = await askAndRead('Introduce the color of the piece( W -> WHITE, R -> RED)=> ');
    const player1 = new Player(name1, color, 12, game);

    console.log('SECOND PLAYER');
    name2 = await askAndRead('Introduce a name for the SECOND player => ');
    color = await askAndRead('Introduce the color of the piece( W -> WHITE, R -> RED)=> ');
    const player2 = new Player(name2, color, 12, game);

    console.log(game.showBoard());

    passTurn(player1, player2);


    posX = await askAndRead('Introduce the position select of the piece in the X  => ');
    x1 = parseInt(posX);
    posY = await askAndRead('Introduce the position select of the piece in the Y  => ');
    y1 = parseInt(posY);
    player1.selectPiece({ x: x1, y: y1 });

    posX = await askAndRead('Introduce the NEW position for move the piece in  X  => ');
    x1 = parseInt(posX);
    posY = await askAndRead('Introduce the NEW position for move the piece in  Y  => ');
    y1 = parseInt(posY);
    player1.movePiece({ x: x1, y: y1 });

    game.refreshGrid();
    console.log(game.showBoard());
};

const passTurn = async (player1, player2) => {
    // let moveDone = false;
    // let posX, posY, x1, y1;
    while (player1.pieces > 0 || player2.pieces > 0) {
    }
};
main();


