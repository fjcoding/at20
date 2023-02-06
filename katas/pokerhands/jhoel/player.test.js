import Player from './player';

describe('Test for Player Class', () => {
    it('should to assigned the correct hand to player', () => {
        const hand1 = '2H 3D 5S 9C KD';
        const hand2 = '2C 3H 4S 8C AH';

        const player1 = new Player('Black', hand1);
        const player2 = new Player('White', hand2);

        expect(player1.toString()).toBe('Black: 2H 3D 5S 9C KD');
        expect(player2.toString()).toBe('White: 2C 3H 4S 8C AH');
    });
});