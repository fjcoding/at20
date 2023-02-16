import { Player } from './player.js';
import { Game } from './game.js';
import { Command } from './interfaceCommand.js';
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
    const game = new Game();

    console.log('WELCOME TO CHECKERS GAME');
    console.log('========================================');

    console.log('FIRST PLAYER');
    name1 = await askAndRead('Introduce a name for the FIRST player => ');
    color = (await askAndRead('Introduce the color of the piece( W -> WHITE, R -> RED)=> ')).toUpperCase();
    const player1 = new Player(name1, color, 12, game);

    console.log('SECOND PLAYER');
    name2 = await askAndRead('Introduce a name for the SECOND player => ');
    color = (await askAndRead('Introduce the color of the piece( W -> WHITE, R -> RED)=> ')).toUpperCase();
    const player2 = new Player(name2, color, 12, game);

    console.log(game.showBoard());

    await startGame(player1, player2);
};

const startGame = async (player1, player2) => {
    const command = new Command();
    let posX, posY, x1, y1, option;
    while (player1.pieces > 0 || player2.pieces > 0) {
        console.log('Player: ', player1.name, ' W');
        posX = await askAndRead('Introduce the position select of the piece in the X  => ');
        x1 = parseInt(posX);
        posY = await askAndRead('Introduce the position select of the piece in the Y  => ');
        y1 = parseInt(posY);
        player1.selectPiece({ x: x1, y: y1 });

        option = (await askAndRead('What do you want to do? move = M or kill = K => ')).toUpperCase();
        if (option == 'M') {
            await command.inputForMovePiece(player1);
        }
        if (option == 'K') {
            await command.inputForKillPiece();
        }

        console.log('Player: ', player2.name, ' R');
        posX = await askAndRead('Introduce the position select of the piece in the X  => ');
        x1 = parseInt(posX);
        posY = await askAndRead('Introduce the position select of the piece in the Y  => ');
        y1 = parseInt(posY);
        player2.selectPiece({ x: x1, y: y1 });
        option = (await askAndRead('What do you want to do? move = M or kill = K => ')).toUpperCase();
        if (option == 'M') {
            await command.inputForMovePiece(player2);
        }
        if (option == 'K') {
            await command.inputForKillPiece();
        }
    }
};
main();


