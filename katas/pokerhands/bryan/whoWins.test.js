import {whoWins} from './whoWins';
import {readHand} from './pokerhands';
test ('Check who wins between two players with no ties in the set', () => {
    var handW = 'KH KS JC JD KH';//full house
    var handB = 'QC 3C 9C 4C QC';//color
    var white = new readHand(handW);
    var black = new readHand(handB);
    var result1 = new whoWins(white.checkHand(), black.checkHand()); // first one white, second black
    var handR = '2S KH KC KS QS';// three of a kind
    var handP = '3H 3S 3C 9D 3H';//poker s
    const red = new readHand(handR);
    const pink = new readHand(handP);
    var result2 = new whoWins(red.checkHand(), pink.checkHand());
    var handG = '2H 3S 5C 9D KH';//tie with the highest
    var handY = 'JC 3S 9C QD AH';
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    var result3 = new whoWins(green.checkHand(), yellow.checkHand());
    expect(result1.end()).toBe('white player wins!');
    expect(result2.end()).toBe('black player wins!');
    expect(result3.end()).toBe('black player wins!');
});

test ('Check who wins between two players with ties in the set', () => {
    var handW = 'KH KS 2C 2D 9H';//
    var handB = 'JC 5H 5C 4C JC';// tie with two pairs
    var white = new readHand(handW);
    var black = new readHand(handB);
    var result1 = new whoWins(white.checkHand(), black.checkHand()); // first one white, second black
    var handR = '2S 2H 2C KS QS';
    var handP = '3H 3S 3C 9D 10H';//tie with three
    const red = new readHand(handR);
    const pink = new readHand(handP);
    var result2 = new whoWins(red.checkHand(), pink.checkHand());
    var handG = '2H 2S 2C 2D KH';//tie in the highest
    var handY = 'JC JS 9C JD JH';//tie in the poker
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    var result3 = new whoWins(green.checkHand(), yellow.checkHand());

    expect(result1.end()).toBe('white player wins!');
    expect(result2.end()).toBe('black player wins!');
    expect(result3.end()).toBe('black player wins!');

    //expect(result.end()).toStrictEqual(1);
    // expect(result.end()).toStrictEqual('white player wins!');
});
