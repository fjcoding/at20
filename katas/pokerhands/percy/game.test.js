import { game } from './game';


describe('Tests if black of white win ', () => {
    it('white black tie', () => {
        const white = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const black = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new game(white, black);
        expect(Hand.asWinner).toBe('Tie');
    });
    it('white win Three of a kind', () => {
        const white = '2H 3D 2S 2C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const black = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new game(white, black);
        expect(Hand.asWinner).toBe('White wins : Three of a kind');
    });
    it('white win two pair', () => {
        const white = '2H 3D 2S 3C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const black = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new game(white, black);
        expect(Hand.asWinner).toBe('White wins : Two pair');
    });

    it('black win Three of a kind', () => {
        const white = '2H 3D AS 2C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const black = '3H 3D 3S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new game(white, black);
        expect(Hand.asWinner).toBe('Black wins : Three of a kind');
    });
    it('black win two pair', () => {
        const white = '4H 3D 5S 3C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const black = '2H 2D 5S 5C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new game(white, black);
        expect(Hand.asWinner).toBe('Black wins : Two pair');
    });
});


