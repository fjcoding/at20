import Game from './game.js';

const main = () => {
    const games = [
        'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH',
        'Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S',
        'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH',
        'Black: 2H 3D 5S 9C KD  White: 2D 3H 5C 9S KH'
    ];

    const results = [];

    games.forEach(strGame => {
        const game = new Game();
        game.parse(strGame);
        results.push(game.getTheWinner());
    });

    return results.join('\n');
};

console.log(main());
