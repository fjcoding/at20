import {readHand} from './pokerhands';


test ('Read the cards and return the hand', () => {
    var handW = '2C 3H 4S 8C AH';
    var handB = '2H 3D 5S 9C KD';
    const white = new readHand(handW);
    const black = new readHand(handB);
    expect(white.cards).toBe('2C 3H 4S 8C AH');
    expect(black.cards).toBe('2H 3D 5S 9C KD');
});

test('Returns the hand turned into an array', () => {
    var handW = '2C 3H 4S 8C AH';
    var handB = '2H 3D 5S 9C KD';
    const white = new readHand(handW);
    const black = new readHand(handB);
    expect(white.pickOne(handW)).toStrictEqual(['2C', '3H', '4S', '8C', 'AH']);
    expect(black.pickOne(handB)).toStrictEqual(['2H', '3D', '5S', '9C', 'KD']);
});


test('Return the highest card in the player\'s hand', () =>{
    var handW = '2C 3H 4S 8C AH';
    var handB = '2H 3D 5S 9C KD';
    const white = new readHand(handW);
    const black = new readHand(handB);
    expect(white.highest()).toBe(14);
    expect(black.highest()).toBe(13);
});

test('Check for number matches and return the type of match', () =>{
    var handW = '2S 8S AS 2S 3S';
    var handB = '2H 3S 3C 5D 5H';
    const white = new readHand(handW);
    const black = new readHand(handB);
    //expect(white.checkMatches()).toBe('No matches');
    expect(white.checkMatches()).toBe('One pair of 2');
    //expect(black.checkMatches()).toBe('One pair of 2');
    //expect(black.checkMatches()).toBe('Three of a kind of 2');
    //expect(black.checkMatches()).toBe('A poker hand of 2');
    expect(black.checkMatches()).toBe('Two pairs of 3 and 5');
});


