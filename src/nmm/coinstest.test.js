import { coins } from './coins';

describe ('Test for having a coin to play', () =>{
    it('Should be able to place a coin an know the remaining coins', () =>{
        const coin = new coins('player1');
        coin.putcoin();
        coin.putcoin();
        coin.putcoin();
        coin.putcoin();
        expect(coin.remaining).toBe(5);
    });
});