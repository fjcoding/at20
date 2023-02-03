import Hand from './hand';
import Player from './player';

describe('Test for Player Class', () => {
    it('should to assigned the correct hand to player', () => {
        const hand1 = new Hand('2H 3D 5S 9C KD');
        const hand2 = new Hand('2C 3H 4S 8C AH');

        const player1 = new Player('Black', hand1);
        const player2 = new Player('White', hand2);

        expect(player1.toSting()).toBe('Black: 2H 3D 5S 9C KD');
        expect(player2.toSting()).toBe('White: 2C 3H 4S 8C AH');
    });
});