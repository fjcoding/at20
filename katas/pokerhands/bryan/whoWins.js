

export class whoWins {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;


        //return [player1,player2];
    }

    turnNum(strn) {
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


    whatSuit(wtag, wsuit) {
        var submit = '';

        var repl = '10';
        //console.log(wtag,wsuit);

        if (wtag == 1) {
            if (wsuit[0] == 1) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with high card: ' + repl;
                } else {
                    submit = 'Black wins. - with high card: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 2) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with a pair of: ' + repl;
                } else {
                    submit = 'Black wins. - with a pair of: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 3) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with two pairs of: ' + repl;
                } else {
                    submit = 'Black wins. - with two pairs of: ' + wsuit[1][0];
                }
                if (wsuit[1][1] == 'T') {
                    submit = submit + ' and ' + repl;
                } else {
                    submit = submit + ' and ' + wsuit[1][1];
                }
            } else if (wsuit[0] == 4) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with three of a kind of: ' + repl;
                } else {
                    submit = 'Black wins. - with three of a kind of: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 5) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with a straight where the highest is: ' + repl;
                } else {
                    submit = 'Black wins. - with a straight where the highest is: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 6) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with a flush where the highest is: ' + repl;
                } else {
                    submit = 'Black wins. - with a flush where the highest is: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 7) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with a full of: ' + repl; //with a full of 9 and 10
                } else {
                    submit = 'Black wins. - with a full of: ' + wsuit[1][0];
                }
                if (wsuit[1][1] == 'T') {
                    submit = submit + ' and ' + repl;
                } else {
                    submit = submit + ' and ' + wsuit[1][1];
                }
            } else if (wsuit[0] == 8) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with a poker of: ' + repl;
                } else {
                    submit = 'Black wins. - with a poker of: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 9) {
                if (wsuit[1][0] == 'T') {
                    submit = 'Black wins. - with a straight flush where the highest is: ' + repl;
                } else {
                    submit = 'Black wins. - with a straight flush where the highest is: ' + wsuit[1][0];
                }
            }
        } else if (wtag == 0) {
            //console.log(wtag,wsuit);
            if (wsuit[0] == 1) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with high card: ' + repl;
                } else {
                    submit = 'White wins. - with high card: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 2) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with a pair of: ' + repl;
                } else {
                    submit = 'White wins. - with a pair of: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 3) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with two pairs of: ' + repl;
                } else {
                    submit = 'White wins. - with two pairs of: ' + wsuit[1][0];
                }
                if (wsuit[1][1] == 'T') {
                    submit = submit + ' and ' + repl;
                } else {
                    submit = submit + ' and ' + wsuit[1][1];
                }
            } else if (wsuit[0] == 4) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with three of a kind of: ' + repl;
                } else {
                    submit = 'White wins. - with three of a kind of: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 5) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with a straight where the highest is: ' + repl;
                } else {
                    submit = 'White wins. - with a straight where the highest is: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 6) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with a flush where the highest is: ' + repl;
                } else {
                    submit = 'White wins. - with a flush where the highest is: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 7) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with a full of: ' + repl; //with a full of 9 and 10
                } else {
                    submit = 'White wins. - with a full of: ' + wsuit[1][0];
                }
                if (wsuit[1][1] == 'T') {
                    submit = submit + ' and ' + repl;
                } else {
                    submit = submit + ' and ' + wsuit[1][1];
                }
            } else if (wsuit[0] == 8) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with a poker of: ' + repl;
                } else {
                    submit = 'White wins. - with a poker of: ' + wsuit[1][0];
                }
            } else if (wsuit[0] == 9) {
                if (wsuit[1][0] == 'T') {
                    submit = 'White wins. - with a straight flush where the highest is: ' + repl;
                } else {
                    submit = 'White wins. - with a straight flush where the highest is: ' + wsuit[1][0];
                }
            }
        }

        return submit;
    }

    end() {
        var result = '';
        var p1ck = this.player1;// [num,[suita,suitb]]
        var p2ck = this.player2;//   0     1 [0 1]
        var lit1 = 0;
        var lit2 = 0;
        var lit3 = 0;
        var lit4 = 0;
        var tag;//0 for white /  1 for black
        //var major = 0;

        if (p1ck[0] > p2ck[0]) {
            tag = 0;
            //result = 'white player wins!';
            result = this.whatSuit(tag, p1ck);
        } else if (p1ck[0] == p2ck[0]) { //+2
            lit1 = this.turnNum(p1ck[1][0]);//[]
            lit2 = this.turnNum(p1ck[1][1]);
            lit3 = this.turnNum(p2ck[1][0]);
            lit4 = this.turnNum(p2ck[1][1]);

            if ((lit1 > lit3 && lit1 > lit4) || (lit2 > lit3 && lit2 > lit4)) {
                tag = 0;
                result = this.whatSuit(tag, p1ck);
            } else if ((lit3 > lit1 && lit3 > lit2) || (lit4 > lit1 && lit4 > lit2)) {
                tag = 1;
                result = this.whatSuit(tag, p2ck);
            } else {
                result = 'Tie';
            }
        } else {
            tag = 1;
            result = this.whatSuit(tag, p2ck);
        }


        return result;
    }
}


