import { handCard } from './cardsPokerHand';
export class pokerHand {
    //2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
    #handCards;
    #typePokerHand
    #suit;
    #value;
    #value2;
    #winningMove;
    #objectValues
    constructor(handCards) {
        this.#handCards = handCards;
        this.asValuePokerHand();
        this.asGame();
    }
    // '2H 3D 5S 9C KD';

    asValuePokerHand() {
        this.#value = [];
        for (let i = 0; i < 5; i++) {
            const cardValue = this.#handCards[i].substring(0, 1);
            this.#value.push(cardValue);
        }
    }

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
        var threeOfAKind;
        var pos2;
        var pos3;
        var pos4;
        var pos5;
        var pos6;
        var pos7;
        var pos8;
        var pos9
        var posT;
        var posJ;
        var posQ;
        var posK;
        var posA;
        this.#value2 = [];
            for (let i = 0; i < 5; i++) {

                this.#value2.push(this.#value[i]);
            }
            for (let i = 0; i < 5; i++) {
                    if(this.#value2[i]=="2"){
                        equalTwoNumbers++;
                        pos2=i;
                    }
                        if(this.#value2[i]=="3") {
                        equalThreeNumbers++;
                        pos3=i;
                    }
                        if(this.#value2[i]=="4") {
                        equalFourNumbers++;
                        pos4=i;
                    }
                        if(this.#value2[i]=="5") {
                        equalFiveNumbers++;
                        pos5=i;
                   }
                        if(this.#value2[i]=="6") {
                        equalSixNumbers++;
                        pos6=i;
                    }
                        if(this.#value2[i]=="7") {
                        equalSevenNumbers++;
                        pos7=i;
                    }
                        if(this.#value2[i]=="8") {
                        equalEightNumbers++;
                        pos8=i;
                    }
                        if(this.#value2[i]=="9") {
                        equalNineNumbers++;
                        pos9=i;
                    }
                        if(this.#value2[i]=="T") {
                        equalTNumbers++;
                        posT=i;
                    }
                        if(this.#value2[i]=="J") {
                        equalJNumbers++;
                        posJ=i;
                    }
                        if(this.#value2[i]=="Q") {
                        equalQNumbers++;
                        posQ=i;
                    }
                    if(this.#value2[i]=="K") {
                        equalKNumbers++;
                        posK=i;
                    }
                    if(this.#value2[i]=="A") {
                        equalANumbers++;
                        posA=i;
                    }
        }

//object values
                this.#objectValues={
                    howMany:{
                        numberTwo:equalTwoNumbers,
                        numberThree:equalThreeNumbers,
                        numberFour:equalFourNumbers,
                        numberFive:equalFiveNumbers,
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
                        numberT:9,
                        numberJ:10,
                        numberQ:11,
                        numberK:12,
                        numberA:13
                    }

                };

//high Card
//this.#winningMove=this.#objectValues;

                if(this.#objectValues.howMany.numberA != 0){
                    this.#winningMove=this.#handCards[posA].concat(' High Card Win');
                }else if(this.#objectValues.howMany.numberK != 0) {
                    this.#winningMove=this.#handCards[posK];
                }else if(this.#objectValues.howMany.numberQ != 0) {
                    this.#winningMove=this.#handCards[posQ];
                }else if(this.#objectValues.howMany.numberJ != 0) {
                    this.#winningMove=this.#handCards[posJ];
                }else if(this.#objectValues.howMany.numberT != 0) {
                    this.#winningMove=this.#handCards[posT];
                }else if(this.#objectValues.howMany.numberFour != 0) {

                }

//pairs or threeOfAKind


    }

    get asValueCard() {
        return  this.#winningMove;
    }
    get asHandCard1() {
        return  this.#value;
    }


}