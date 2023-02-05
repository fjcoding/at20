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

    turnNum(strn) {//return the values as integer as 2 3 4 5 6 7 8 9 10 11 12 13 14
        var nums = 0;
        var comp = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        var sizec = comp.length;
        for (var keyl1 = 0; keyl1 < sizec; keyl1++) {//turn them to numbers
            if (strn == comp[keyl1]) {
                nums = keyl1 + 2;
            }
        }
        return nums;
    }

    turnStr(numI) {// return a list of numbers as the previous format
        var nums = '';
        var comp = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        var sizec = comp.length;// 13
        for (var keyl1 = 0; keyl1 < sizec; keyl1++) {//turn them to numbers
            if (numI == comp[keyl1]) {
                if (numI == 14) {
                    nums = 'A';
                } else if (numI == 13) {
                    nums = 'K';
                } else if (numI == 12) {
                    nums = 'Q';
                } else if (numI == 11) {
                    nums = 'J';
                } else if (numI == 10) {
                    nums = 'T';
                } else {
                    nums = numI.toString();
                }
            }
        }
        return nums;
    }

    highest(hand) {
        var size;
        var outs = [];
        var cardCH = this.pickOne(hand);
        size = cardCH.length;

        var highest = 0;
        var  number = 0;

        for (var keyCH = 0; keyCH < size; keyCH++) {
            number = this.turnNum(cardCH[keyCH][0]);
            if (number >= highest) {
                highest = number;
            }
        }
        if (highest <= 9) {
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
        var posTag = [];
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
                            match1 = current;//2
                            matchCount += 1;//1
                            init = keyCM1;//0
                        } else if (matchCount <= 3) {
                            for (var keyTag1 = 0; keyTag1 < posTag.length; keyTag1++) {
                                if (keyCM1 == init) {
                                    if (posTag[keyTag1][1] != keyCM2) {//
                                        cm1 += 1;
                                    }
                                    if (cm1 == posTag.length) {
                                        posTag.push([keyCM1, keyCM2]);

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
                                        cm2 += 1;//here the issue with full
                                    }


                                    if (cm2 == posTag.length) {//1
                                        posTag.push([keyCM1, keyCM2]);//
                                        //console.log(posTag);
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

                            cm2 = 0;
                        }
                    }
                }
            }
        }
        //cm1 = 0;
        //cm2 = 0;
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
            outs.push([match1, match2]);//
            //  result = 'Two pairs of ' + match1 + ' and ' + match2;
        } else if (matchCount == 3 && (match1 == match2)) {
            outs.push(8);
            outs.push([match1, match1]);
            // result = 'A poker hand of ' + match2;
        } else if (matchCount == 3 && (match1 != match2))  {//
            outs.push(7);
            outs.push([match1, match2]);
            // result = 'A Full house of ' +match1+' and '+match2; full criteria is wrogs
        }

        //console.log(outs);
        return outs;
    }

    checkSuits(hand) {
        var size;
        var outs = [];
        var cardCS = this.pickOne(hand);
        size = cardCS.length;
        var maxSuit = [];
        var suitC = 0;
        var pivot = cardCS[0][1];
        for (var keySb = 1; keySb < size; keySb++) {
            if (pivot == cardCS[keySb][1]) {
                suitC += 1;
            }
        }
        if (suitC == 4) {
            suitC = 0;
            outs.push(6);
            maxSuit = this.highest(cardCS);//[a[b,b]]
            outs.push([maxSuit[1][0], maxSuit[1][0]]);
        } else {
            suitC = 0;
            outs = [0, [0, 0]];
        }
        return outs;
    }

    checkStraights() {
        var hand;
        var size;
        hand = this.cards;
        var cardSt = this.pickOne(hand);
        size = cardSt.length;//  hand = '2H 4S 5H 3H 6K'
        var higs = 0;
        var outst = [];
        var pivot = [];
        var list = [];

        var secount = 0;
        for (var keys1 = 0; keys1 < size; keys1++) {
            higs = this.turnNum(cardSt[keys1][0]);
            pivot.push(higs);
        }
        pivot.sort(function(a, b) {
            return a - b;
        });
        for (var keys2 = 0; (keys2 + 1) < size; keys2++) {
            if ((pivot[keys2] + 1) == pivot[keys2 + 1]) {
                secount += 1;
            }
        }
        if (secount == 4) {
            var max = pivot.reduce((a, b) => Math.max(a, b), -Infinity);
            var maxString = this.turnStr(max);
            list = this.checkSuits(hand);

            if (list[0] == 6) {
                outst.push(9);
                outst.push([maxString, maxString]);
            } else {
                outst.push(5);
                outst.push([maxString, maxString]);
            }
        } else {
            outst = [0, [0, 0]];
        }
        //console.log(outst);
        return outst;
    }

    checkHand() {
        var hand;
        hand = this.cards;
        var high = this.highest(hand);
        var matches = this.checkMatches();
        var color = this.checkSuits(hand);
        var straight = this.checkStraights(); // the array format for the codes is [value,[suits,suits]]

        var highestCH = 0;
        var codes = [];

        if (high[0] > highestCH) {
            highestCH = high[0];
            codes = [];
            codes.push(high[0]);
            codes.push([high[1][0], high[1][1]]);
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
        if (straight[0] > highestCH) {
            highestCH = straight[0];
            codes = [];
            codes.push(straight[0]);
            codes.push([straight[1][0], straight[1][1]]);
        }
        return codes;
    }
}