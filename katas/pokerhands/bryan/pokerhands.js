export class readHand {
    constructor(cards) {
        this.cards = cards;
    }

    pickOne() {
        var hand;
        hand = this.cards;
        var card = [];
        var cardB = '';
        var cardA = [];
        var sizea;
        var sizeb;

        sizea = hand.length;
        for (var keya = 0; keya < sizea; keya++) {
            if (hand[keya] != ' ') {
                cardB += hand[keya];
            }
            if ((hand[keya] == ' ') || (keya + 1 == sizea)) {
                cardA.push(cardB);
                cardB = '';
            }
        }
        sizeb = cardA.length;
        for (var keyb = 0; keyb < sizeb; keyb++) {
            if (cardA[keyb].length > 2) {
                var news = cardA[keyb].replace('10', 'T');
                card.push(news);
            } else {
                card.push(cardA[keyb]);
            }
        }
        return card;
    }

    highest(hand) {
        var T = 10;
        var J = 11;
        var Q = 12;
        var K = 13;
        var A = 14;
        var size;
        var outs = [];
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
            } else if  (cardCH[keyCH][0] == 'T') {
                number = T;
            } else {
                number = parseInt(cardCH[keyCH][0]);
            }

            if (number >= highest) {
                highest = number;
            }
        }

        if (highest < 9) {
            outs.push(1);
            outs.push([highest.toString(), highest.toString()]);
        } else {
            if (highest == 14) {
                outs.push(1);
                outs.push(['A', 'A']);
            } else if (highest == 13) {
                outs.push(1);
                outs.push(['K', 'K']);
            } else if (highest == 12) {
                outs.push(1);
                outs.push(['Q', 'Q']);
            } else if (highest == 11) {
                outs.push(1);
                outs.push(['J', 'J']);
            } else if (highest == 10) {
                outs.push(1);
                outs.push(['T', 'T']);
            }
        }

        return outs;
    }

    checkMatches() {
        var hand;
        var size;
        hand = this.cards;
        var cardCM = this.pickOne(hand);
        size = cardCM.length;
        var pivot;
        var match1 = '';   //
        var match2 = '';
        var matchCount = 0;
        //var result = '';
        var posTag = [];//matches colletion
        var cm1 = 0;
        var cm2 = 0;
        var init = 0;
        var outs = [];


        for (var keyCM1 = 0; keyCM1 < size; keyCM1++) {//
            pivot = cardCM[keyCM1][0]; //add a tag to the position

            for (var keyCM2 = 0; keyCM2 < size; keyCM2++) {
                var current = cardCM[keyCM2][0];

                if (keyCM2 != keyCM1) {
                    if (current == pivot) {//
                        if (matchCount == 0) {
                            posTag.push([keyCM1, keyCM2]);
                            match1 = current;
                            matchCount += 1;
                            init = keyCM1;
                        } else if (matchCount < 3) {
                            for (var keyTag1 = 0; keyTag1 < posTag.length; keyTag1++) {
                                if (keyCM1 == init) {
                                    if (posTag[keyTag1][1] != keyCM2) {
                                        cm1 += 1;
                                    }
                                    if (cm1 == posTag.length) {
                                        posTag.push([keyCM1, keyCM2]);
                                        outs = [0, [0, 0]];
                                        cm1 = 0;
                                        if (current == match1) {
                                            match2 = match1;
                                            match1 = current;
                                            matchCount += 1;
                                        } else {
                                            match2 = current;
                                            matchCount += 1;
                                        }
                                    }
                                } else {
                                    if (((posTag[keyTag1][0] != keyCM1) && (posTag[keyTag1][1] != keyCM2)) && ((posTag[keyTag1][0] != keyCM2) && (posTag[keyTag1][1] != keyCM1))) {
                                        cm2 += 1;//1
                                    }


                                    if (cm2 == posTag.length) {//1
                                        posTag.push([keyCM1, keyCM2]);//
                                        console.log(posTag);
                                        cm2 = 0;
                                        if (current == match1) {
                                            match2 = match1;//obs
                                            match1 = current; //
                                            matchCount += 1; //
                                        } else {
                                            match2 = current;
                                            matchCount += 1;
                                        }
                                    }
                                }
                            }
                            cm1 = 0;
                            cm2 = 0;
                        }
                    }
                }
            }
        }
        cm1 = 0;
        cm2 = 0;
        if (matchCount == 0) {
            outs = [0, [0, 0]];
            //result = 'No matches';
        } else if (matchCount == 1) {
            outs.push(2);
            outs.push([match1, match1]);
            // result = 'One pair of' + ' ' + match1;
        } else if (matchCount == 2 && (match1 == match2)) {
            outs.push(4);
            outs.push([match1, match1]);
            //result = 'Three of a kind of ' + match2;
        } else if (matchCount == 2 && (match1 != match2)) {
            outs.push(3);
            outs.push([match1, match2]);
            //  result = 'Two pairs of ' + match1 + ' and ' + match2;
        } else if (matchCount == 3 && (match1 == match2)) {
            outs.push(8);
            outs.push([match1, match1]);
            // result = 'A poker hand of ' + match2;
        } else if (matchCount == 3 && (match1 != match2)) {
            outs.push(7);
            outs.push([match1, match2]);
            // result = 'A Full house of ' +match1+' and '+match2;
        } else if (matchCount == 4) {

            //result = 'OOR';
        }
        //console.log(outs);
        return outs;
    }


    checkSuits() {  // '2C', '3C', '4C', '8C', 'AC'
        var hand;
        var size;
        var outs = [];
        hand = this.cards;
        var cardCS = this.pickOne(hand);
        size = cardCS.length;
        var suitC = 0;
        var pivot = cardCS[0][1];//C
        for (var keySb = 1; keySb < size; keySb++) {
            if (pivot == cardCS[keySb][1]) {
                suitC += 1;
            }
        }
        if (suitC == 4) {
            suitC = 0;
            outs.push(6);
            outs.push([pivot, pivot]);
        } else {
            suitC = 0;
            outs = [0, [0, 0]];
        }
        return outs;
    }

    checkHand() {   //in the function where we check if there are pairs or three of a kind or a poker we can look for the same
        var hand;
        hand = this.cards;
        var handHan = this.pickOne(hand);
        var high = this.highest(handHan);
        var matches = this.checkMatches();
        var color = this.checkSuits();
        // the array format for the codes is [value,[suits,suits]]
        var highestCH = 0;
        //var  number = 0;
        var codes = [];

        if (high[0] > highestCH) {
            highestCH = high[0];
            codes = [];
            codes.push(high[0]);
            codes.push([high[1][0], high[1][1]]);// creando un codigo para probar los resultados
        }

        if (matches[0] > highestCH) {
            highestCH = matches[0];
            codes = [];
            codes.push(matches[0]);
            codes.push([matches[1][0], matches[1][1]]);
        }

        if (color[0] > highestCH) {
            highestCH = color[0];
            codes = [];
            codes.push(color[0]);
            codes.push([color[1][0], color[1][1]]);
        }
        //console.log(codes);
        return codes;
    }
}