import {whoWins} from './whoWins';
import {readHand} from './pokerhands';

test ('Check for black to win the hands without a tie on the sets', () => {
    var handW = 'KH 5S 8C JD 10H';
    var handB = '7C 3S 9H 7C QD';
    var white = new readHand(handW);
    var black = new readHand(handB);
    var result1 = new whoWins(white.checkHand(), black.checkHand()); // first one white, second black

    var handR = '2S 9H 2C 8S QS';//
    var handP = '3H 3S 10C 10D 2H';//
    const red = new readHand(handR);
    const pink = new readHand(handP);
    var result2 = new whoWins(red.checkHand(), pink.checkHand());

    var handG = '2H 3S 5C 9D 8H';//
    var handY = '2C 3S 9C 5D 10H';//
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    var result3 = new whoWins(green.checkHand(), yellow.checkHand());

    var handBl = 'JH 10S 7D 8H 5H';//
    var handLb = '5D 10S 10C 8D 9H';//
    const blue = new readHand(handBl);
    const lightb = new readHand(handLb);
    var result4 = new whoWins(blue.checkHand(), lightb.checkHand());

    var handW1 = 'KH 5S 8C JD KH';//
    var handB1 = '10C JH 10S JC QC';//
    white = new readHand(handW1);
    black = new readHand(handB1);
    var result5 = new whoWins(white.checkHand(), black.checkHand());

    var handW2 = 'KH 5S 8C JD KH';//
    var handB2 = '8C JH 8S JC QC';//
    white = new readHand(handW2);
    black = new readHand(handB2);
    var result6 = new whoWins(white.checkHand(), black.checkHand());

    var handW3 = 'KH 5S 8C JD KH';//
    var handB3 = '8C JH 8S 8C QC';//
    white = new readHand(handW3);
    black = new readHand(handB3);
    var result7 = new whoWins(white.checkHand(), black.checkHand());

    var handW4 = 'KH 5S 8C JD KH';
    var handB4 = '10C JH 10S 8C 10C';
    white = new readHand(handW4);
    black = new readHand(handB4);
    var result8 = new whoWins(white.checkHand(), black.checkHand());

    var handW5 = 'KH 5S 8C JD KH';// two pairs of k
    var handB5 = '5C 4H 6S 8C 7C';//straight
    white = new readHand(handW5);
    black = new readHand(handB5);
    var result9 = new whoWins(white.checkHand(), black.checkHand());

    var handW6 = 'KH 5S 8C JD KH';//
    var handB6 = '9C 6H 10S 8C 7C';//straight
    white = new readHand(handW6);
    black = new readHand(handB6);
    var result10 = new whoWins(white.checkHand(), black.checkHand());

    var handW7 = 'KH 5S 8C JD KH';//
    var handB7 = '9C 5C 10C 8C 7C';//flush with 10
    white = new readHand(handW7);
    black = new readHand(handB7);
    var result11 = new whoWins(white.checkHand(), black.checkHand());

    var handW8 = 'KH 5S 8C JD KH';//
    var handB8 = '9C 5C KC 8C 7C';//flush
    white = new readHand(handW8);
    black = new readHand(handB8);
    var result12 = new whoWins(white.checkHand(), black.checkHand());

    var handW9 = 'KH 5S 8C JD KH';//
    var handB9 = '9C 9D 10H 9S 10C';//full with 10
    white = new readHand(handW9);
    black = new readHand(handB9);
    var result13 = new whoWins(white.checkHand(), black.checkHand());

    var handW10 = 'KH 5S 8C JD KH';//
    var handB10 = '9C 9D KH 9S KC';//full without 10
    white = new readHand(handW10);
    black = new readHand(handB10);
    var result14 = new whoWins(white.checkHand(), black.checkHand());


    var handW11 = 'KH 5S 8C JD KH';//
    var handB11 = '10D 9C 10H 10S 10C';//poker with 10
    white = new readHand(handW11);
    black = new readHand(handB11);
    var result15 = new whoWins(white.checkHand(), black.checkHand());

    var handW12 = 'KH 5S 8C JD KH';//
    var handB12 = '9S 9H KC 9D 9C';//poker without 10
    white = new readHand(handW12);
    black = new readHand(handB12);
    var result16 = new whoWins(white.checkHand(), black.checkHand());

    var handW13 = 'KH 5S 8C JD KH';//
    var handB13 = '10D 9D 6D 7D 8D';//straight flush with highest is 10
    white = new readHand(handW13);
    black = new readHand(handB13);
    var result17 = new whoWins(white.checkHand(), black.checkHand());

    var handW14 = 'KH 5S 8C JD KH';//
    var handB14 = '10S AS KS JS QS';//straight flush with highest is A
    white = new readHand(handW14);
    black = new readHand(handB14);
    var result18 = new whoWins(white.checkHand(), black.checkHand());
    //Check for black to win the hands without a tie on the sets

    expect(result1.end()).toBe('Black wins. - with a pair of: 7');//
    expect(result2.end()).toBe('Black wins. - with two pairs of: 3 and 10');
    expect(result3.end()).toBe('Black wins. - with high card: 10');
    expect(result4.end()).toBe('Black wins. - with a pair of: 10');
    expect(result5.end()).toBe('Black wins. - with two pairs of: 10 and J');
    expect(result6.end()).toBe('Black wins. - with two pairs of: 8 and J');
    expect(result7.end()).toBe('Black wins. - with three of a kind of: 8');
    expect(result8.end()).toBe('Black wins. - with three of a kind of: 10');
    expect(result9.end()).toBe('Black wins. - with a straight where the highest is: 8');
    expect(result10.end()).toBe('Black wins. - with a straight where the highest is: 10');
    expect(result11.end()).toBe('Black wins. - with a flush where the highest is: 10');
    expect(result12.end()).toBe('Black wins. - with a flush where the highest is: K');
    expect(result13.end()).toBe('Black wins. - with a full of: 9 and 10');
    expect(result14.end()).toBe('Black wins. - with a full of: 9 and K');
    expect(result15.end()).toBe('Black wins. - with a poker of: 10');
    expect(result16.end()).toBe('Black wins. - with a poker of: 9');
    expect(result17.end()).toBe('Black wins. - with a straight flush where the highest is: 10');
    expect(result18.end()).toBe('Black wins. - with a straight flush where the highest is: A');
});


test ('Check for white to win the hands without a tie on the sets', () => {
    var handB = 'KH 5S 8C JD 10H';//full house
    var handW = '7C 3S 9H 7C QD';//color
    var white = new readHand(handW);
    var black = new readHand(handB);
    var result1 = new whoWins(white.checkHand(), black.checkHand()); // first one white, second black

    var handP = '2S 9H 2C 8S QS';// three of a kind
    var handR = '3H 3S 10C 10D 2H';//two pairs
    const red = new readHand(handR);
    const pink = new readHand(handP);
    var result2 = new whoWins(red.checkHand(), pink.checkHand());

    var handY = '2H 3S 5C 9D 8H';//
    var handG = '2C 3S 9C 5D 10H';//
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    var result3 = new whoWins(green.checkHand(), yellow.checkHand());

    var handLb = 'JH 10S 7D 8H 5H';// highest J
    var handBl = '5D 10S 10C 8D 9H';//a pair of 10's
    const blue = new readHand(handBl);
    const lightb = new readHand(handLb);
    var result4 = new whoWins(blue.checkHand(), lightb.checkHand());

    var handB1 = 'KH 5S 8C JD KH';//
    var handW1 = '10C JH 10S JC QC';//
    white = new readHand(handW1);
    black = new readHand(handB1);
    var result5 = new whoWins(white.checkHand(), black.checkHand());

    var handB2 = 'KH 5S 8C JD KH';//
    var handW2 = '8C JH 8S JC QC';//
    white = new readHand(handW2);
    black = new readHand(handB2);
    var result6 = new whoWins(white.checkHand(), black.checkHand());

    var handB3 = 'KH 5S 8C JD KH';//full house
    var handW3 = '8C JH 8S 8C QC';//three of a kind
    white = new readHand(handW3);
    black = new readHand(handB3);
    var result7 = new whoWins(white.checkHand(), black.checkHand());

    var handB4 = 'KH 5S 8C JD KH';//full house
    var handW4 = '10C JH 10S 8C 10C';//three of a kind
    white = new readHand(handW4);
    black = new readHand(handB4);
    var result8 = new whoWins(white.checkHand(), black.checkHand());

    var handB5 = 'KH 5S 8C JD KH';// two pairs of k
    var handW5 = '5C 4H 6S 8C 7C';//straight
    white = new readHand(handW5);
    black = new readHand(handB5);
    var result9 = new whoWins(white.checkHand(), black.checkHand());

    var handB6 = 'KH 5S 8C JD KH';//
    var handW6 = '9C 6H 10S 8C 7C';//straight
    white = new readHand(handW6);
    black = new readHand(handB6);
    var result10 = new whoWins(white.checkHand(), black.checkHand());

    var handB7 = 'KH 5S 8C JD KH';//
    var handW7 = '9C 5C 10C 8C 7C';//flush with 10
    white = new readHand(handW7);
    black = new readHand(handB7);
    var result11 = new whoWins(white.checkHand(), black.checkHand());

    var handB8 = 'KH 5S 8C JD KH';//
    var handW8 = '9C 5C KC 8C 7C';//flush
    white = new readHand(handW8);
    black = new readHand(handB8);
    var result12 = new whoWins(white.checkHand(), black.checkHand());

    var handB9 = 'KH 5S 8C JD KH';//
    var handW9 = '9C 9D 10H 9S 10C';//full with 10
    white = new readHand(handW9);
    black = new readHand(handB9);
    var result13 = new whoWins(white.checkHand(), black.checkHand());

    var handB10 = 'KH 5S 8C JD KH';//
    var handW10 = '9C 9D KH 9S KC';//full without 10
    white = new readHand(handW10);
    black = new readHand(handB10);
    var result14 = new whoWins(white.checkHand(), black.checkHand());


    var handB11 = 'KH 5S 8C JD KH';//
    var handW11 = '10D 9C 10H 10S 10C';//poker with 10
    white = new readHand(handW11);
    black = new readHand(handB11);
    var result15 = new whoWins(white.checkHand(), black.checkHand());

    var handB12 = 'KH 5S 8C JD KH';//
    var handW12 = '9S 9H KC 9D 9C';//poker without 10
    white = new readHand(handW12);
    black = new readHand(handB12);
    var result16 = new whoWins(white.checkHand(), black.checkHand());

    var handB13 = 'KH 5S 8C JD KH';//
    var handW13 = '10D 9D 6D 7D 8D';//straight flush with highest is 10
    white = new readHand(handW13);
    black = new readHand(handB13);
    var result17 = new whoWins(white.checkHand(), black.checkHand());

    var handB14 = 'KH 5S 8C JD KH';//
    var handW14 = '10S AS KS JS QS';//straight flush with highest is A
    white = new readHand(handW14);
    black = new readHand(handB14);
    var result18 = new whoWins(white.checkHand(), black.checkHand());

    expect(result1.end()).toBe('White wins. - with a pair of: 7');//
    expect(result2.end()).toBe('White wins. - with two pairs of: 3 and 10');
    expect(result3.end()).toBe('White wins. - with high card: 10');
    expect(result4.end()).toBe('White wins. - with a pair of: 10');
    expect(result5.end()).toBe('White wins. - with two pairs of: 10 and J');
    expect(result6.end()).toBe('White wins. - with two pairs of: 8 and J');
    expect(result7.end()).toBe('White wins. - with three of a kind of: 8');
    expect(result8.end()).toBe('White wins. - with three of a kind of: 10');
    expect(result9.end()).toBe('White wins. - with a straight where the highest is: 8');
    expect(result10.end()).toBe('White wins. - with a straight where the highest is: 10');
    expect(result11.end()).toBe('White wins. - with a flush where the highest is: 10');
    expect(result12.end()).toBe('White wins. - with a flush where the highest is: K');
    expect(result13.end()).toBe('White wins. - with a full of: 9 and 10');
    expect(result14.end()).toBe('White wins. - with a full of: 9 and K');
    expect(result15.end()).toBe('White wins. - with a poker of: 10');
    expect(result16.end()).toBe('White wins. - with a poker of: 9');
    expect(result17.end()).toBe('White wins. - with a straight flush where the highest is: 10');
    expect(result18.end()).toBe('White wins. - with a straight flush where the highest is: A');
});


test ('Check for black to win the hands with a tie on the sets', () => {
    var handW = 'KH 5S 8C 5D 10H';//one pair
    var handB = '7C 3S 9H 7C QD';
    var white = new readHand(handW);
    var black = new readHand(handB);
    var result1 = new whoWins(white.checkHand(), black.checkHand()); // first one white, second black

    var handR = '2S 9H 2C 8S 9S';//two pairs
    var handP = '3H 3S 10C 10D 2H';//
    const red = new readHand(handR);
    const pink = new readHand(handP);
    var result2 = new whoWins(red.checkHand(), pink.checkHand());

    var handG = '2H 3S 5C 9D 8H';//highest card
    var handY = '2C 3S 9C 5D 10H';//
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    var result3 = new whoWins(green.checkHand(), yellow.checkHand());

    var handBl = 'JH 7S 7D 8H 5H';//
    var handLb = '5D 10S 10C 8D 9H';//
    const blue = new readHand(handBl);
    const lightb = new readHand(handLb);
    var result4 = new whoWins(blue.checkHand(), lightb.checkHand());

    var handW1 = 'KH 5S 8C 5D 8H';//
    var handB1 = 'QD JH 10S JC QC';//tie with two pairs
    white = new readHand(handW1);
    black = new readHand(handB1);
    var result5 = new whoWins(white.checkHand(), black.checkHand());

    var handW2 = 'KH 5S 8C JD KH';//
    var handB2 = '8C JH 8S JC QC';//
    white = new readHand(handW2);
    black = new readHand(handB2);
    var result6 = new whoWins(white.checkHand(), black.checkHand());

    var handW3 = 'KH 5S 5C 5D 10H';//
    var handB3 = '8C JH 8S 8C QC';//three of a kind
    white = new readHand(handW3);
    black = new readHand(handB3);
    var result7 = new whoWins(white.checkHand(), black.checkHand());

    var handW4 = '3H 3S 8C 3D KH';
    var handB4 = '10C JH 10S 8C 10C';
    white = new readHand(handW4);
    black = new readHand(handB4);
    var result8 = new whoWins(white.checkHand(), black.checkHand());

    var handW5 = '2H 5S 3C 4D 6H';// two pairs of k
    var handB5 = 'JC 7H 10S 8C 9C';//straight
    white = new readHand(handW5);
    black = new readHand(handB5);
    var result9 = new whoWins(white.checkHand(), black.checkHand());

    var handW6 = '2H 5S 3C 4D 6H';//
    var handB6 = '9C 6H 10S 8C 7C';//straight
    white = new readHand(handW6);
    black = new readHand(handB6);
    var result10 = new whoWins(white.checkHand(), black.checkHand());

    var handW7 = '2H 5H 8H 7H 6H';//
    var handB7 = '9C 5C 10C 8C 7C';// tie flush with 10
    white = new readHand(handW7);
    black = new readHand(handB7);
    var result11 = new whoWins(white.checkHand(), black.checkHand());

    var handW8 = '10H 5H 8H JH QH';//
    var handB8 = '9C 5C KC 8C 7C';// tie flush without 10
    white = new readHand(handW8);
    black = new readHand(handB8);
    var result12 = new whoWins(white.checkHand(), black.checkHand());

    var handW9 = '6H 6S 8C 8D 6H';//
    var handB9 = '9C 9D 10H 9S 10C';//full with 10
    white = new readHand(handW9);
    black = new readHand(handB9);
    var result13 = new whoWins(white.checkHand(), black.checkHand());

    var handW10 = 'QH 5S QC QD 5H';//
    var handB10 = '9C 9D KH 9S KC';//full without 10
    white = new readHand(handW10);
    black = new readHand(handB10);
    var result14 = new whoWins(white.checkHand(), black.checkHand());


    var handW11 = '5H 5S 5C 5D KH';//
    var handB11 = '10D 9C 10H 10S 10C';//poker with 10
    white = new readHand(handW11);
    black = new readHand(handB11);
    var result15 = new whoWins(white.checkHand(), black.checkHand());

    var handW12 = '2H 2S 2C 2D KH';//
    var handB12 = '9S 9H KC 9D 9C';//poker without 10
    white = new readHand(handW12);
    black = new readHand(handB12);
    var result16 = new whoWins(white.checkHand(), black.checkHand());

    var handW13 = '2H 5H 4H 6H 3H';//
    var handB13 = '10D 9D 6D 7D 8D';//straight flush with highest is 10
    white = new readHand(handW13);
    black = new readHand(handB13);
    var result17 = new whoWins(white.checkHand(), black.checkHand());

    var handW14 = '9H 10H QH JH KH';//
    var handB14 = '10S AS KS JS QS';//straight flush with highest is A
    white = new readHand(handW14);
    black = new readHand(handB14);
    var result18 = new whoWins(white.checkHand(), black.checkHand());
    //Check for black to win the hands without a tie on the sets

    expect(result1.end()).toBe('Black wins. - with a pair of: 7');//
    expect(result2.end()).toBe('Black wins. - with two pairs of: 3 and 10');
    expect(result3.end()).toBe('Black wins. - with high card: 10');
    expect(result4.end()).toBe('Black wins. - with a pair of: 10');
    expect(result5.end()).toBe('Black wins. - with two pairs of: Q and J');
    expect(result6.end()).toBe('Black wins. - with two pairs of: 8 and J');
    expect(result7.end()).toBe('Black wins. - with three of a kind of: 8');
    expect(result8.end()).toBe('Black wins. - with three of a kind of: 10');
    expect(result9.end()).toBe('Black wins. - with a straight where the highest is: J');
    expect(result10.end()).toBe('Black wins. - with a straight where the highest is: 10');
    expect(result11.end()).toBe('Black wins. - with a flush where the highest is: 10');
    expect(result12.end()).toBe('Black wins. - with a flush where the highest is: K');
    expect(result13.end()).toBe('Black wins. - with a full of: 9 and 10');
    expect(result14.end()).toBe('Black wins. - with a full of: 9 and K');
    expect(result15.end()).toBe('Black wins. - with a poker of: 10');
    expect(result16.end()).toBe('Black wins. - with a poker of: 9');
    expect(result17.end()).toBe('Black wins. - with a straight flush where the highest is: 10');
    expect(result18.end()).toBe('Black wins. - with a straight flush where the highest is: A');
});


test ('Check for white to win the hands with a tie on the sets', () => {
    var handB = 'KH 5S 8C 5D 10H';//one pair
    var handW = '7C 3S 9H 7C QD';
    var white = new readHand(handW);
    var black = new readHand(handB);
    var result1 = new whoWins(white.checkHand(), black.checkHand()); // first one white, second black

    var handP = '2S 9H 2C 8S 9S';//two pairs
    var handR = '3H 3S 10C 10D 2H';//
    const red = new readHand(handR);
    const pink = new readHand(handP);
    var result2 = new whoWins(red.checkHand(), pink.checkHand());

    var handY = '2H 3S 5C 9D 8H';//highest card
    var handG = '2C 3S 9C 5D 10H';//
    const green = new readHand(handG);
    const yellow = new readHand(handY);
    var result3 = new whoWins(green.checkHand(), yellow.checkHand());

    var handLb = 'JH 7S 7D 8H 5H';//
    var handBl = '5D 10S 10C 8D 9H';//
    const blue = new readHand(handBl);
    const lightb = new readHand(handLb);
    var result4 = new whoWins(blue.checkHand(), lightb.checkHand());

    var handB1 = 'KH 5S 8C 5D 8H';//
    var handW1 = 'QD JH 10S JC QC';//tie with two pairs
    white = new readHand(handW1);
    black = new readHand(handB1);
    var result5 = new whoWins(white.checkHand(), black.checkHand());

    var handB2 = 'KH 5S 8C JD KH';//
    var handW2 = '8C JH 8S JC QC';//
    white = new readHand(handW2);
    black = new readHand(handB2);
    var result6 = new whoWins(white.checkHand(), black.checkHand());

    var handB3 = 'KH 5S 5C 5D 10H';//
    var handW3 = '8C JH 8S 8C QC';//three of a kind
    white = new readHand(handW3);
    black = new readHand(handB3);
    var result7 = new whoWins(white.checkHand(), black.checkHand());

    var handB4 = '3H 3S 8C 3D KH';
    var handW4 = '10C JH 10S 8C 10C';
    white = new readHand(handW4);
    black = new readHand(handB4);
    var result8 = new whoWins(white.checkHand(), black.checkHand());

    var handB5 = '2H 5S 3C 4D 6H';// two pairs of k
    var handW5 = 'JC 7H 10S 8C 9C';//straight
    white = new readHand(handW5);
    black = new readHand(handB5);
    var result9 = new whoWins(white.checkHand(), black.checkHand());

    var handB6 = '2H 5S 3C 4D 6H';//
    var handW6 = '9C 6H 10S 8C 7C';//straight
    white = new readHand(handW6);
    black = new readHand(handB6);
    var result10 = new whoWins(white.checkHand(), black.checkHand());

    var handB7 = '2H 5H 8H 7H 6H';//
    var handW7 = '9C 5C 10C 8C 7C';// tie flush with 10
    white = new readHand(handW7);
    black = new readHand(handB7);
    var result11 = new whoWins(white.checkHand(), black.checkHand());

    var handB8 = '10H 5H 8H JH QH';//
    var handW8 = '9C 5C KC 8C 7C';// tie flush without 10
    white = new readHand(handW8);
    black = new readHand(handB8);
    var result12 = new whoWins(white.checkHand(), black.checkHand());

    var handB9 = '6H 6S 8C 8D 6H';//
    var handW9 = '9C 9D 10H 9S 10C';//full with 10
    white = new readHand(handW9);
    black = new readHand(handB9);
    var result13 = new whoWins(white.checkHand(), black.checkHand());

    var handB10 = 'QH 5S QC QD 5H';//
    var handW10 = '9C 9D KH 9S KC';//full without 10
    white = new readHand(handW10);
    black = new readHand(handB10);
    var result14 = new whoWins(white.checkHand(), black.checkHand());


    var handB11 = '5H 5S 5C 5D KH';//
    var handW11 = '10D 9C 10H 10S 10C';//poker with 10
    white = new readHand(handW11);
    black = new readHand(handB11);
    var result15 = new whoWins(white.checkHand(), black.checkHand());

    var handB12 = '2H 2S 2C 2D KH';//
    var handW12 = '9S 9H KC 9D 9C';//poker without 10
    white = new readHand(handW12);
    black = new readHand(handB12);
    var result16 = new whoWins(white.checkHand(), black.checkHand());

    var handB13 = '2H 5H 4H 6H 3H';//
    var handW13 = '10D 9D 6D 7D 8D';//straight flush with highest is 10
    white = new readHand(handW13);
    black = new readHand(handB13);
    var result17 = new whoWins(white.checkHand(), black.checkHand());

    var handB14 = '9H 10H QH JH KH';//
    var handW14 = '10S AS KS JS QS';//straight flush with highest is A
    white = new readHand(handW14);
    black = new readHand(handB14);
    var result18 = new whoWins(white.checkHand(), black.checkHand());


    expect(result1.end()).toBe('White wins. - with a pair of: 7');//
    expect(result2.end()).toBe('White wins. - with two pairs of: 3 and 10');
    expect(result3.end()).toBe('White wins. - with high card: 10');
    expect(result4.end()).toBe('White wins. - with a pair of: 10');
    expect(result5.end()).toBe('White wins. - with two pairs of: Q and J');
    expect(result6.end()).toBe('White wins. - with two pairs of: 8 and J');
    expect(result7.end()).toBe('White wins. - with three of a kind of: 8');
    expect(result8.end()).toBe('White wins. - with three of a kind of: 10');
    expect(result9.end()).toBe('White wins. - with a straight where the highest is: J');
    expect(result10.end()).toBe('White wins. - with a straight where the highest is: 10');
    expect(result11.end()).toBe('White wins. - with a flush where the highest is: 10');
    expect(result12.end()).toBe('White wins. - with a flush where the highest is: K');
    expect(result13.end()).toBe('White wins. - with a full of: 9 and 10');
    expect(result14.end()).toBe('White wins. - with a full of: 9 and K');
    expect(result15.end()).toBe('White wins. - with a poker of: 10');
    expect(result16.end()).toBe('White wins. - with a poker of: 9');
    expect(result17.end()).toBe('White wins. - with a straight flush where the highest is: 10');
    expect(result18.end()).toBe('White wins. - with a straight flush where the highest is: A');
});


