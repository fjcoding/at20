import {readHand} from './pokerhands';


test ('Read the cards and return the hand', () => {
    var handW = '2C 3H 4S 8C 10H';
    var handB = '2H 3D 5S 9C KD';
    const white = new readHand(handW);
    const black = new readHand(handB);
    expect(white.cards).toBe('2C 3H 4S 8C 10H');
    expect(black.cards).toBe('2H 3D 5S 9C KD');
});


test('Returns the hand turned into an array', () => {
    var handW = '10C 10H 4S 8C AH';//leave a blank at the end
    var handB = '2H 3D 10S 9C KD';
    const white = new readHand(handW);
    const black = new readHand(handB);
    expect(white.pickOne(handW)).toStrictEqual(['TC', 'TH', '4S', '8C', 'AH']);
    expect(black.pickOne(handB)).toStrictEqual(['2H', '3D', 'TS', '9C', 'KD']);
});


test('Return the highest card in the player\'s hand', () =>{
    var handW = '10C 10H 4S 8C AH';
    var handB = '2H 3D 5S 9C 9D';
    const white = new readHand(handW);
    const black = new readHand(handB);
    expect(white.highest(handW)).toStrictEqual([1, ['A', 'A']]);
    expect(black.highest(handB)).toStrictEqual([1, ['9', '9']]);
});


test('Check for number matches and return the type of match', () =>{
    var handW = '2S 8S 9S KS QS';
    var handB = '9C QS 4C 9D 3H';
    var handG = 'JC 5C 5C 4C JC';
    var handY = 'QC 3S 9C QD QH';
    var handP = 'KH KS JC JD KH';
    var handR = '3H 3S 3C 9D 3H';

    const white = new readHand(handW);
    const black = new readHand(handB);
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    const red = new readHand(handR);
    const pink = new readHand(handP);

    expect(white.checkMatches()).toStrictEqual([0, [0, 0]]);
    expect(black.checkMatches()).toStrictEqual([2, ['9', '9']]);
    expect(green.checkMatches()).toStrictEqual([3, ['J', '5']]);
    expect(yellow.checkMatches()).toStrictEqual([4, ['Q', 'Q']]);
    expect(pink.checkMatches()).toStrictEqual([7, ['K', 'J']]);//check full house
    expect(red.checkMatches()).toStrictEqual([8, ['3', '3']]);
});

test('Verify that checkSuits method works', () => {
    var handG = '3H 7H 5H 9H 6K';
    var handY = 'QC 3C 9C 4C KC';
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    expect(green.checkSuits(handG)).toStrictEqual([0, [0, 0]]);
    expect(yellow.checkSuits(handY)).toStrictEqual([6, ['K', 'K']]);// return the highest value of flush
});

test('Verify that straights method works', () => {
    var handG = '6H 7S 8H 9H 10K';
    var handY = 'QC JC 9C 8C 10C';
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    expect(green.checkStraights()).toStrictEqual([5, ['T', 'T']]);
    expect(yellow.checkStraights()).toStrictEqual([9, ['Q', 'Q']]);
});


test('Test the outs on the checkHand method', () => {
    var handW = 'AC 2H AS AC AH';
    var handB = '3H 3D 5S 5C KD';
    var handG = 'JC 5C 5C 4C 4C';//to check
    var handY = '3C QS 9C QD QH';
    var handP = '9D 9S 5C 5D 9H';//priority to the three but not the other way
    var handR = 'QH 3C 9S 4C QC';
    var handBl = '6H 7S 8H 9H 10K';
    const blue = new readHand(handBl);
    const white = new readHand(handW);
    const black = new readHand(handB);
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    const red = new readHand(handR);
    const pink = new readHand(handP);

    expect(red.checkHand()).toStrictEqual([2, ['Q', 'Q']]);
    expect(white.checkHand()).toStrictEqual([8, ['A', 'A']]);
    expect(black.checkHand()).toStrictEqual([3, ['3', '5']]);//respect the order of the cardss
    expect(pink.checkHand()).toStrictEqual([7, ['9', '5']]);//check full
    expect(green.checkHand()).toStrictEqual([6, ['J', 'J']]);
    expect(yellow.checkHand()).toStrictEqual([4, ['Q', 'Q']]);
    expect(blue.checkHand()).toStrictEqual([5, ['T', 'T']]);
});

