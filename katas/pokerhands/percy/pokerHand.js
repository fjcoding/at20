import { handCard } from './cardsPokerHand';
export class pokerHand {
    //2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
    #handCards;
    #suit;
    #value;
    #value2;
    #winningMove;
    objectValues;
    #suits;
    constructor(handCards) {
        this.#handCards = handCards;
        this.#suits=handCards;
        this.asValuePokerHand();
        this.asGame();
       // this.asSuitPokerHand();
    }
    // '2H 3D 5S 9C KD';

    asValuePokerHand() {
        this.#value = [];
        for (let i = 0; i < 5; i++) {
            const cardValue = this.#handCards[i].substring(0, 1);
            this.#value.push(cardValue);
        }
    }
/*
    asSuitPokerHand() {
        this.#suit = [];
        for (let i = 0; i < 5; i++) {
            const cardValue = this.#suits[i].substring(1, 2);
            this.#suit.push(cardValue);
        }
    }*/

    asGame(){
        var equalTwoNumbers=0;
        var equalThreeNumbers=0;
        var equalFourNumbers=0;
        var equalFiveNumbers=0;
        var equalSixNumbers=0;
        var equalSevenNumbers=0;
        var equalEightNumbers=0;
        var equalNineNumbers=0;
        var equalTNumbers=0;
        var equalJNumbers=0;
        var equalQNumbers=0;
        var equalKNumbers=0;
        var equalANumbers=0;
        var pair=0;
        var threeOfAKind=0;
        var pos2=[];
        var pos3=[];
        var pos4=[];
        var pos5=[];
        var pos6=[];
        var pos7=[];
        var pos8=[];
        var pos9=[];
        var posT=[];
        var posJ=[];
        var posQ=[];
        var posK=[];
        var posA=[];
        var twoPair=[];
        this.#value2 = [];
            for (let i = 0; i < 5; i++) {

                this.#value2.push(this.#value[i]);
            }
            for (let i = 0; i < 5; i++) {
                    if(this.#value2[i]=="2"){
                        equalTwoNumbers++;
                        pos2.push(i);

                    }
                        if(this.#value2[i]=="3") {
                        equalThreeNumbers++;
                        pos3.push(i);
                    }
                        if(this.#value2[i]=="4") {
                        equalFourNumbers++;
                        pos4.push(i);
                    }
                        if(this.#value2[i]=="5") {
                        equalFiveNumbers++;
                        pos5.push(i);
                   }
                        if(this.#value2[i]=="6") {
                        equalSixNumbers++;
                        pos6.push(i);
                    }
                        if(this.#value2[i]=="7") {
                        equalSevenNumbers++;
                        pos7.push(i);
                    }
                        if(this.#value2[i]=="8") {
                        equalEightNumbers++;
                        pos8.push(i);
                    }
                        if(this.#value2[i]=="9") {
                        equalNineNumbers++;
                        pos9.push(i);
                    }
                        if(this.#value2[i]=="T") {
                        equalTNumbers++;
                        posT.push(i);
                    }
                        if(this.#value2[i]=="J") {
                        equalJNumbers++;
                        posJ.push(i);
                    }
                        if(this.#value2[i]=="Q") {
                        equalQNumbers++;
                        posQ.push(i);
                    }
                    if(this.#value2[i]=="K") {
                        equalKNumbers++;
                        posK.push(i);
                    }
                    if(this.#value2[i]=="A") {
                        equalANumbers++;
                        posA.push(i);
                    }
        }

//object values how many types if a card, the final values and the individual values
                this.objectValues={
                    howMany:{
                        numberTwo:equalTwoNumbers,
                        numberThree:equalThreeNumbers,
                        numberFour:equalFourNumbers,
                        numberFive:equalFiveNumbers,
                        numberSix:equalSixNumbers,
                        numberSeven:equalSevenNumbers,
                        numberEight:equalEightNumbers,
                        numberNine:equalNineNumbers,
                        numberT:equalTNumbers,
                        numberJ:equalJNumbers,
                        numberQ:equalQNumbers,
                        numberK:equalKNumbers,
                        numberA:equalANumbers
                    },
                    inGameValues:{
                        numberTwo:equalTwoNumbers*1,
                        numberThree:equalThreeNumbers*2,
                        numberFour:equalFourNumbers*3,
                        numberFive:equalFiveNumbers*4,
                        numberSix:equalSixNumbers*5,
                        numberSeven:equalSevenNumbers*6,
                        numberEight:equalEightNumbers*7,
                        numberNine:equalNineNumbers*8,
                        numberT:equalTNumbers*9,
                        numberJ:equalJNumbers*10,
                        numberQ:equalQNumbers*11,
                        numberK:equalKNumbers*12,
                        numberA:equalANumbers*13
                    },
                    value:{
                        numberTwo:1,
                        numberThree:2,
                        numberFour:3,
                        numberFive:4,
                        numberFive:5,
                        numberFive:6,
                        numberFive:7,
                        numberFive:8,
                        numberT:9,
                        numberJ:10,
                        numberQ:11,
                        numberK:12,
                        numberA:13
                    }

                };





//four of a kind
            if(this.#winningMove==undefined){
                if(this.objectValues.howMany.numberA==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberK==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberQ==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberJ==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberT==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberNine==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberEight==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberSeven==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberSix==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberFive==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberFour==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberThree==4) {
                    this.#winningMove='four of a kind';
                }else if(this.objectValues.howMany.numberTwo==4) {
                    this.#winningMove='four of a kind';
                }
            }

//full house
    if(this.#winningMove==undefined){
        if(this.objectValues.howMany.numberA==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberK==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberQ==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberJ==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberT==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberNine==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberEight==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberSeven==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberSix==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberFive==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberFour==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberThree==3 && (this.objectValues.howMany.numberTwo==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }else if(this.objectValues.howMany.numberTwo==3 && (this.objectValues.howMany.numberThree==2 || this.objectValues.howMany.numberFour==2 || this.objectValues.howMany.numberFive==2 || this.objectValues.howMany.numberSix==2 || this.objectValues.howMany.numberSeven==2 || this.objectValues.howMany.numberEight==2 || this.objectValues.howMany.numberNine==2 || this.objectValues.howMany.numberT==2 || this.objectValues.howMany.numberJ==2 || this.objectValues.howMany.numberQ==2 || this.objectValues.howMany.numberK==2 || this.objectValues.howMany.numberA==2)) {
            this.#winningMove='Full House';
        }
    }
//Three of a kind
            if(this.#winningMove==undefined){
                    if(this.objectValues.howMany.numberA==3) {
                        const a=posA[0];
                        const b= posA[1];
                        const c=posA[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberK==3) {
                        const a=posK[0];
                        const b= posK[1];
                        const c=posK[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberQ==3) {
                        const a=posQ[0];
                        const b= posQ[1];
                        const c=posQ[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberJ==3) {
                        const a=posJ[0];
                        const b= posJ[1];
                        const c=posJ[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberT==3) {
                        const a=posT[0];
                        const b= posT[1];
                        const c=posT[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberNine==3) {
                        const a=pos9[0];
                        const b= pos9[1];
                        const c=pos9[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberEight==3) {
                        const a=pos8[0];
                        const b= pos8[1];
                        const c=pos8[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberSeven==3) {
                        const a=pos7[0];
                        const b= pos7[1];
                        const c=pos7[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberSix==3) {
                        const a=pos6[0];
                        const b= pos6[1];
                        const c=pos6[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberFive==3) {
                        const a=pos5[0];
                        const b= pos5[1];
                        const c=pos5[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberFour==3) {
                        const a=pos4[0];
                        const b= pos4[1];
                        const c=pos4[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberThree==3) {
                        const a=pos3[0];
                        const b= pos3[1];
                        const c=pos3[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }else if(this.objectValues.howMany.numberTwo==3) {
                        const a=pos2[0];
                        const b= pos2[1];
                        const c=pos2[2];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+' '+this.#handCards[c]+ ' Three of a kind winning move');
                    }
                }
                  //pair
                if(this.#winningMove==undefined){
                   if(this.objectValues.howMany.numberA==2) {
                        const a=posA[0];
                        const b= posA[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberK==2) {
                        const a=posK[0];
                        const b= posK[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberQ==2) {
                        const a=posQ[0];
                        const b= posQ[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberJ==2) {
                        const a=posJ[0];
                        const b= posJ[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberT==2) {
                        const a=posT[0];
                        const b= posT[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberNine==2) {
                        const a=pos9[0];
                        const b= pos9[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberEight==2) {
                        const a=pos8[0];
                        const b= pos8[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberSeven==2) {
                        const a=pos7[0];
                        const b= pos7[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberSix==2) {
                        const a=pos6[0];
                        const b= pos6[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberFive==2) {
                        const a=pos5[0];
                        const b= pos5[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberFour==2) {
                        const a=pos4[0];
                        const b= pos4[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberThree==2) {
                        const a=pos3[0];
                        const b= pos3[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    } if(this.objectValues.howMany.numberTwo==2) {
                        const a=pos2[0];
                        const b= pos2[1];
                        this.#winningMove=this.#handCards[a].concat(' '+this.#handCards[b]+ ' pair winning move');
                        twoPair.push(this.#winningMove);
                    }
                }
//high Card
//this.#winningMove=pos2[1];
            if(this.#winningMove==undefined){
                if(this.objectValues.howMany.numberA != 0){
                    this.#winningMove=this.#handCards[posA].concat(' High Card Win');
                }else if(this.objectValues.howMany.numberK != 0) {
                    this.#winningMove=this.#handCards[posK].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberQ != 0) {
                    this.#winningMove=this.#handCards[posQ].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberJ != 0) {
                    this.#winningMove=this.#handCards[posJ].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberT != 0) {
                    this.#winningMove=this.#handCards[posT].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberNine != 0) {
                    this.#winningMove=this.#handCards[pos9].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberEight != 0) {
                    this.#winningMove=this.#handCards[pos8].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberSeven != 0) {
                    this.#winningMove=this.#handCards[pos7].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberSix != 0) {
                    this.#winningMove=this.#handCards[pos6].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberFive != 0) {
                    this.#winningMove=this.#handCards[pos5].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberFour != 0) {
                    this.#winningMove=this.#handCards[pos4].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberThree != 0) {
                    this.#winningMove=this.#handCards[pos3].concat(' High Card Win');;
                }else if(this.objectValues.howMany.numberTwo != 0) {
                    this.#winningMove=this.#handCards[pos2].concat(' High Card Win');;
                }
            }




//two pair
                const lenght=twoPair.length;
                if(lenght>1){
                this.#winningMove=twoPair[0].concat(' with '+twoPair[1] + ' two pair winning move');
                }


    }

    get asValueCard() {
        return  this.#winningMove;
    }
    get asHandCard1() {
        return  this.#value;
    }
   /* get asCardSuit() {
        return  this.#suit;
    }*/

}