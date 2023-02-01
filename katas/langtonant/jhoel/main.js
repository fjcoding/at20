import LangtonAnt from './langtonant.js';
import Color from './color.js';
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
    var order;
    var color;
    var antPosition = { x: 0, y: 0 };
    var steps;

    console.log(Color.FgGreen, 'WELCOME TO LANGTON ANT');
    console.log('Note: The initial direction of the ant is up');
    console.log(Color.FgGreen, '========================================');

    order = await askAndRead(' Introduce the dimension(n) of the grid(nxn) => ');

    color = await askAndRead('Introduce the color of the grid( 0 -> WHITE, 1 -> BLACK)=> ');

    antPosition.x = await askAndRead('Introduce the position of the ant in the X axis(start with 0) =>');

    antPosition.y = await askAndRead('Introduce the position of the ant in the Y axis(start with 0) => ');

    steps = await askAndRead('Introduce the number of steps => ');

    console.log('\n', Color.FgWhite);

    const game1 = new LangtonAnt(order, color, antPosition);
    run(steps, game1);
};


const run = async (steps, langtonAnt) => {
    const time = 500;
    await waiting(langtonAnt, time, 0);

    for (let step = 0; step < steps; step++) {
        await waiting(langtonAnt, time, step);
        langtonAnt.turnAnt(langtonAnt.getColorAntSquare());
        await waiting(langtonAnt, time, step);
        langtonAnt.setColorAntSquare(langtonAnt.getColorAntSquare());
        langtonAnt.moveAntForward();
        await waiting(langtonAnt, time, step);
    }

    console.log('========================================');
};

const waiting = async(langtonAnt, time, step) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.clear();
            console.log(`Step ${step + 1} ${step == 0 ? ' (Initial State)' : ''}`);
            console.log('========================================');
            printOnConsole(langtonAnt);
            resolve();
        }, time);
    });
};

const printOnConsole = (langtonAnt) => {
    console.log(Color.BgGreen, Color.FgGreen, Array(langtonAnt.getGrid().length * 3 - 1).fill('-').join('') + Color.BgBlack);
    for (let row = 0; row < langtonAnt.getGrid().length; row++) {
        const rowi = langtonAnt.getGrid()[row];
        const rowToPrint = [];
        for (let col = 0; col < rowi.length; col++) {
            rowToPrint.push(Color.BgGreen, ' ');

            const RIGHTARROW = '●➤';
            const LEFTARROW = '◀●';
            const UPARROW = '●⬆';
            const DOWNARROW = '●⬇';

            const UP = LangtonAnt.UP;
            const DOWN = LangtonAnt.DOWN;
            const LEFT = LangtonAnt.LEFT;

            const direction = langtonAnt.getAntDirection() == UP ? UPARROW : langtonAnt.getAntDirection() == DOWN ? DOWNARROW : langtonAnt.getAntDirection() == LEFT ? LEFTARROW : RIGHTARROW;
            const antPosition = langtonAnt.getAntPosition();
            const text = (row == antPosition.y && col == antPosition.x) ? Color.FgRed + direction : '__';

            const element = rowi[col];
            rowToPrint.push((element == LangtonAnt.WHITE) ? (Color.BgWhite + Color.FgWhite + text) : (Color.BgBlack + Color.FgBlack + text));
        }

        rowToPrint.push(Color.BgGreen, ' ' + Color.BgBlack);
        console.log(rowToPrint.join(''));
        console.log(Color.BgGreen, Color.FgGreen, Array(rowi.length * 3 - 1).fill('-').join('') + Color.BgBlack);
    }

    console.log(Color.BgBlack, Color.FgWhite,);
};


main();


