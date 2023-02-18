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

    isValidName = async (name) => {
        while (name === '') {
            console.log('Please enter a valid name  for the first player');
            name = await this.askAndRead('Introduce a name for the FIRST player => ');
        }
        return name;
    };

    inputForSelectPiece = async (player) => {
        let posX, posY, x1, y1;
        posX = await this.askAndRead('Introduce the position select of the piece in the X  => ');
        x1 = parseInt(posX);
        posY = await this.askAndRead('Introduce the position select of the piece in the Y  => ');
        y1 = parseInt(posY);
        player.selectPiece({ x: x1, y: y1 });
    };

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
        player.killEnemyPiece({ x: x1, y: y1 });
        player.game.refreshGrid();
        console.log(player.game.showBoard());
    };
}