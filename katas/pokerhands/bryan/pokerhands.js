export class readHand {
    constructor(cards) {
        this.cards = cards;
    }

    pickOne(hand) {
        var card = [];
        var cardB = '';
        var keyB = 0;
        var size;
        // hand = this.cards;
        size = hand.length;

        for (var keya = 0; keya < size; keya++) {
            if (hand[keya] != ' ') {
                cardB += hand[keya];
                keyB += 1;
            }

            if (keyB == 2) {
                card.push(cardB);
                keyB = 0;
                cardB = '';
            }
        }
        return card;
    }

    highest() {
        var J = 11;
        var Q = 12;
        var K = 13;
        var A = 14;
        var hand;
        var size;
        hand = this.cards;
        var cardCH = this.pickOne(hand);
        size = cardCH.length;

        var highest = 0;
        var  number = 0;
        for (var keyCH = 0; keyCH < size; keyCH++) {
            if (cardCH[keyCH][0] == 'A') {
                number = A;
            } else if (cardCH[keyCH][0] == 'J') {
                number = J;
            } else if (cardCH[keyCH][0] == 'Q') {
                number = Q;
            } else if  (cardCH[keyCH][0] == 'K') {
                number = K;
            } else {
                number = parseInt(cardCH[keyCH][0]);
            }
            if (number >= highest) {
                highest = number;
            }
        }

        //var arg1='Highest value is: '+(size-4)/2;
        return highest;
    }

    checkMatches() {
        // var J = 11;
        // var Q = 12;
        // var K = 13;
        // var A = 14;
        var hand;
        var size;
        hand = this.cards;
        var cardCM = this.pickOne(hand);
        size = cardCM.length;
        var pivot;
        //pivot = cardCM[0][0]; //comparar todos con todos, nada de pivot
        var match1 = '';   //
        var match2 = '';
        var matchCount = 0;
        var result = '';
        var posTag = [];//matches colletion


        for (var keyCM1 = 0; keyCM1 < size; keyCM1++) {// 2H 3S 3C 5D 5H 3 4
            pivot = cardCM[keyCM1][0];//add a tag to the position

            for (var keyCM2 = 0; keyCM2 < size; keyCM2++) {
                if (keyCM2 != keyCM1) {
                    if (cardCM[keyCM2][0] == pivot) {// [[1,2]  ]  mc 1  3,4
                        if (matchCount == 0) { // matches analysis
                            posTag.push([keyCM1, keyCM2]);//
                            match1 = cardCM[keyCM2][0];// 3
                            //match2==match1;

                            matchCount += 1;// 1
                        } else if (matchCount < 2) {
                            for (var keyTag1 = 0; keyTag1 < posTag.length; keyTag1++) {
                                if (keyCM1 == 0) {//fix the pivot issue
                                    if (posTag[keyTag1][1] != keyCM2) {
                                        //based on matchCount decide what hand it is
                                        posTag.push([keyCM1, keyCM2]);// [[0,1],[0,3]],[0,4]]
                                        if (cardCM[keyCM2][0] == match1) {
                                            match2 = match1;
                                            match1 = cardCM[keyCM2][0];
                                        } else {
                                            match1 = cardCM[keyCM2][0];// tag of a match as string 2
                                            matchCount += 1;       //maybe introduce positions 2
                                        }
                                    }
                                } else if ((posTag[keyTag1][0] != keyCM1 && posTag[keyTag1][1] != keyCM2) && (posTag[keyTag1][0] != keyCM2 && posTag[keyTag1][1] != keyCM1)) {
                                    //based on matchCount decide what hand it is
                                    posTag.push([keyCM1, keyCM2]);// [[1,2],[3,4]]]

                                    if (cardCM[keyCM2][0] == match1) {
                                        match2 = match1;
                                        match1 = cardCM[keyCM2][0];
                                    } else {
                                        match2 = cardCM[keyCM2][0];// tag of a match as string 2
                                        matchCount = 4;       //maybe introduce positions 2
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        //Check the mount of matches and return the result
        if (matchCount == 0) {
            result = 'No matches';
        } else if (matchCount == 1) {
            result = 'One pair of' + ' ' + match1;
        } else if (matchCount == 2) {
            result = 'Three of a kind of ' + match2;
        } else if (matchCount == 3) {
            result = 'A poker hand of ' + match2;
        } else if (matchCount == 4) {
            result = 'Two pairs of ' + match1 + ' and ' + match2;
        }


        return result;
    }


//     checkHand() {   //in the function where we check if there are pairs or three of a kind or a poker we can look for the same
//         var hand;
//         hand = this.cards;
//     }
}