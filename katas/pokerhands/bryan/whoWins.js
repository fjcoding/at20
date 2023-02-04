

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


    end() {
        var result = '';
        var p1ck = this.player1;// [num,[suita,suitb]]
        var p2ck = this.player2;
        var lit1 = 0;
        var lit2 = 0;
        var lit3 = 0;
        var lit4 = 0;
        //var major = 0;

        if (p1ck[0] > p2ck[0]) {
            result = 'white player wins!';
        } else if (p1ck[0] == p2ck[0]) { //+2
            lit1 = this.turnNum(p1ck[1][0]);//[]
            lit2 = this.turnNum(p1ck[1][1]);
            lit3 = this.turnNum(p2ck[1][0]);
            lit4 = this.turnNum(p2ck[1][1]);

            if ((lit1 > lit3 && lit1 > lit4) || (lit2 > lit3 && lit2 > lit4)) {
                result = 'white player wins!';
            } else if ((lit3 > lit1 && lit3 > lit2) || (lit4 > lit1 && lit4 > lit2)) {
                result = 'black player wins!';
            }
            // else if(lit1<lit3) {
            //     result = 'black player wins!';
        } else {
            result = 'black player wins!';
        }

        console.log([this.player1, this.player2]);
        //console.log(p1ck[0],p2ck[0]);
        return result;
    }
}


