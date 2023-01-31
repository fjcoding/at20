const { Color } = require('./colors.js');
const LangtonAnt = require('./langtonant.js');

console.clear();

const askAndRead = (text) => new Promise(resolve => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

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

    const game1 = new LangtonAnt(order, color, { x: antPosition.x, y: antPosition.y });
    game1.run(steps);
};

main();


