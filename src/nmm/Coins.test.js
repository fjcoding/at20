import { Coins } from './coins';

describe ('Test to know about a place with a *', () =>{
    it('should set the symbol and state correctly', () => {
        const coin = new Coins('*');
        expect(coin.symbol).toBe('*');
        expect(coin.state).toBe('active');

        const coin2 = new Coins('-');
        expect(coin2.symbol).toBe('-');
        expect(coin2.state).toBe('inactive');
    });
});