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
    let color1, color2;
    const game = new Game();
    const command = new Command();

    console.log('WELCOME TO CHECKERS GAME');
    console.log('========================================');

    console.log('FIRST PLAYER');
    name1 = await askAndRead('Introduce a name for the FIRST player => ');
    await command.isValidName(name1);
    color1 = (await askAndRead('Introduce the color of the piece( W -> WHITE, R -> RED)=> ')).toUpperCase();
    const player1 = new Player(name1, color1, 12, game);

    console.log('SECOND PLAYER');
    name2 = await askAndRead('Introduce a name for the SECOND player => ');
    await command.isValidName(name2);
    if (color1 === 'W') {
        color2 = 'R';
    } else if (color1 === 'R') {
        color2 = 'W';
    }
    const player2 = new Player(name2, color2, 12, game);

    console.clear();
    console.log(game.showBoard());

    await startGame(player1, player2);
};

const startGame = async (player1, player2) => {
    const command = new Command();
    let option;
    while (player1.pieces > 0 || player2.pieces > 0) {
        console.log('Player: ', player1.name, ' piece color: ', player1.pieceColor);
        console.log('Player 1 has ', player1.pieces, ' pieces');
        await command.inputForSelectPiece(player1);
        option = (await askAndRead('What do you want to do? move = M or kill = K => ')).toUpperCase();
        if (option == 'M') {
            await command.inputForMovePiece(player1);
        }
        if (option == 'K') {
            await command.inputForKillPiece(player1);
            player2.pieces--;
        }

        console.log('Player: ', player2.name, ' piece color: ', player2.pieceColor);
        console.log('Player 2 has ', player2.pieces, ' pieces');
        await command.inputForSelectPiece(player2);
        option = (await askAndRead('What do you want to do? move = M or kill = K => ')).toUpperCase();
        if (option == 'M') {
            await command.inputForMovePiece(player2);
        }
        if (option == 'K') {
            await command.inputForKillPiece(player2);
            player1.pieces--;
        }
    }
};
main();


