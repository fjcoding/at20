import * as ReadLine from 'readline';
import { stdin as input, stdout as output } from 'node:process';


export class Command {
    askAndRead = (text) => new Promise(resolve => {
        const readLine = ReadLine.createInterface({ input, output });
        readLine.question(text, (data) => {
            readLine.close();
            resolve(data);
        });
    }
    );

    inputForMovePiece = async (player) => {
        let posX, posY, x1, y1;
        posX = await this.askAndRead('Introduce the NEW position for move the piece in  X  => ');
        x1 = parseInt(posX);
        posY = await this.askAndRead('Introduce the NEW position for move the piece in  Y  => ');
        y1 = parseInt(posY);
        player.movePiece({ x: x1, y: y1 });
        player.game.refreshGrid();
        console.log(player.game.showBoard());
    };

    inputForKillPiece = async (player) => {
        let posX, posY, x1, y1;
        posX = await this.askAndRead('Introduce a NEXT position after kill your enemy for move the piece in  X  => ');
        x1 = parseInt(posX);
        posY = await this.askAndRead('Introduce a NEXT position after kill your enemy for move the piece in  Y  => ');
        y1 = parseInt(posY);
        //metodo matar o comer, eliminar
        player.movePiece({ x: x1, y: y1 });//reemplazar aqui esa action
        player.game.refreshGrid();
        console.log(player.game.showBoard());
    };
}