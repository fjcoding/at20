/*Value is the this form:
xyyzz
x : Type of hand (Hight card, pair, tri, full.....) Hight card = 1, pair = 2, tri = 3 ......
yy : max value of type (for example for full house [3d, 3c, 3c, 2d, 2h], this number is "03")
zz : hight card only if necessary (for example for Four of a kind [kd, kc, kh, kS, 2s], this number is "02" )

so this hand ['KC', '3C', '4C', '6C', '7C'] = 11300 points

*/
export class pokerGame {
    getScoreHand(hand) {
        let caracteristicHand;
        caracteristicHand = this.isHightCard(hand);
        if (caracteristicHand[0]) {
            const x = '1'; //x
            let yy = '';
            let zz = '';
            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.isPair(hand);
        if (caracteristicHand[0]) {
            const x = '2';
            let yy = '';
            let zz = '';

            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.is2Pair(hand);
        if (caracteristicHand[0]) {
            const x = '3';
            let yy = '';
            let zz = '';

            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.isTri(hand);
        if (caracteristicHand[0]) {
            const x = '4';
            let yy = '';
            let zz = '';


            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.isStraight(hand);
        if (caracteristicHand[0]) {
            const x = '5';
            let yy = '';
            let zz = '';

            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.isFlush(hand);
        if (caracteristicHand[0]) {
            const x = '6';
            let yy = '';
            let zz = '';

            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.isFull(hand);
        if (caracteristicHand[0]) {
            const x = '7';
            let yy = '';
            let zz = '';

            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.isSK(hand);
        if (caracteristicHand[0]) {
            const x = '8';
            let yy = '';
            let zz = '';

            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
        caracteristicHand = this.isSF(hand);
        if (caracteristicHand[0]) {
            const x = '9';
            let yy = '';
            let zz = '';

            if (caracteristicHand[1] < 10) {
                yy = '0' + caracteristicHand[1].toString();
            } else {
                yy = caracteristicHand[1].toString();
            }

            if (caracteristicHand[2] < 10) {
                zz = '0' + caracteristicHand[2].toString();
            } else {
                zz = caracteristicHand[2].toString();
            }

            return parseInt(x + yy + zz);
        }
    }

    //9
    isSF(hand) {
        const numbers = this.onliNumbers(hand);
        const suits = this.#onliSuit(hand);
        const range = this.#range(5, numbers[0]);
        const same = (element) => element === suits[0];
        if (!suits.every(same)) {
            return [false, 0, 0];
        }
        numbers.sort(function(a, b) {
            return a - b;
        });
        if (!numbers.join('') === range.join('')) {
            return [false, 0, 0];
        }
        return [true, Math.max(...numbers), 0];
    }

    //8
    isSK(hand) {
        const numbers = this.onliNumbers(hand);
        let count = {};
        let uniqueNumber;
        let repitedNumber;
        for (let element of numbers) {
            count[element] = (count[element] || 0) + 1;
        }
        if (Object.keys(count).length === 2) {
            for (let index of Object.keys(count)) {
                if (count[index] == 4) {
                    repitedNumber = parseInt(index);
                }
                if (count[index] == 1) {
                    uniqueNumber = parseInt(index);
                }
            }
        }
        if (repitedNumber !== undefined || uniqueNumber !== undefined) {
            return [true, repitedNumber, uniqueNumber];
        }
        return [false, 0, 0];
    }

    isFull(hand) {
        const numbers = this.onliNumbers(hand);
        let count = {};
        let repited2Numbers;
        let repited3Number;
        for (let element of numbers) {
            count[element] = (count[element] || 0) + 1;
        }
        if (Object.keys(count).length === 2) {
            for (let index of Object.keys(count)) {
                if (count[index] === 2) {
                    repited2Numbers = parseInt(index);
                }
                if (count[index] === 3) {
                    repited3Number = parseInt(index);
                }
            }
            if (repited3Number !== undefined && repited2Numbers !== undefined) {
                return [true, repited3Number, repited2Numbers];
            }
        }

        return [false, 0, 0];
    }

    isFlush(hand) {
        const numbers = this.onliNumbers(hand);
        const suits = this.#onliSuit(hand);
        const range = this.#range(5, Math.min(...numbers));
        const same = (element) => element === suits[0];
        numbers.sort(function(a, b) {
            return a - b;
        });

        if (range.join('') === numbers.join('')) {
            return [false, 0, 0];
        }
        if (suits.every(same)) {
            return [true, Math.max(...numbers), 0];
        }
        return [false, 0, 0];
    }

    isStraight(hand) {
        const numbers = this.onliNumbers(hand);
        const suits = this.#onliSuit(hand);
        const range = this.#range(5, Math.min(...numbers));
        const same = (element) => element === suits[0];
        if (!suits.every(same)) {
            numbers.sort(function(a, b) {
                return a - b;
            });
            if (range.join('') === numbers.join('')) {
                return [true, Math.max(...numbers), 0];
            }
        }
        return [false, 0, 0];
    }

    isTri(hand) {
        const numbers = this.onliNumbers(hand);
        let count = {};
        let noRepitedNumbers = [];
        let repitedNumber;
        const suits = this.#onliSuit(hand);
        const same = (element) => element === suits[0];
        if (!suits.every(same)) {
            for (let element of numbers) {
                count[element] = (count[element] || 0) + 1;
            }
            if (Object.keys(count).length === 3) {
                for (let index of Object.keys(count)) {
                    if (count[index] === 3) {
                        repitedNumber = parseInt(index);
                    }
                    if (count[index] === 1) {
                        noRepitedNumbers.push(parseInt(index));
                    }
                }
                if (repitedNumber !== undefined && noRepitedNumbers.length === 2) {
                    return [true, repitedNumber, Math.max(...noRepitedNumbers)];
                }
            }
        }
        return [false, 0, 0];
    }

    is2Pair(hand) {
        const numbers = this.onliNumbers(hand);
        let count = {};
        let noRepitedNumbers;
        let repitedNumber = [];
        const suits = this.#onliSuit(hand);
        const same = (element) => element === suits[0];
        if (!suits.every(same)) {
            for (let element of numbers) {
                count[element] = (count[element] || 0) + 1;
            }
            if (Object.keys(count).length === 3) {
                for (let index of Object.keys(count)) {
                    if (count[index] === 2) {
                        repitedNumber.push(parseInt(index));
                    }
                    if (count[index] === 1) {
                        noRepitedNumbers = parseInt(index);
                    }
                }
                if ((noRepitedNumbers !== undefined) && (repitedNumber.length === 2)) {
                    return [true, Math.max(...repitedNumber), noRepitedNumbers];
                }
            }
        }
        return [false, 0, 0];
    }

    isPair(hand) {
        const numbers = this.onliNumbers(hand);
        let count = {};
        let noRepitedNumbers = [];
        let repitedNumber;
        const same = (element) => element === suits[0];
        const suits = this.#onliSuit(hand);
        if (!suits.every(same)) {
            for (let element of numbers) {
                count[element] = (count[element] || 0) + 1;
            }
            if (Object.keys(count).length === 4) {
                for (let index of Object.keys(count)) {
                    if (count[index] === 2) {
                        repitedNumber = parseInt(index);
                    }
                    if (count[index] === 1) {
                        noRepitedNumbers.push(parseInt(index));
                    }
                }
                if (repitedNumber !== undefined && noRepitedNumbers.length === 3) {
                    return [true, repitedNumber, Math.max(...noRepitedNumbers)];
                }
            }
        }
        return [false, 0, 0];
    }

    isHightCard(hand) {
        const numbers = this.onliNumbers(hand);
        const suits = this.#onliSuit(hand);
        let count = {};
        const range = this.#range(5, Math.min(...numbers));
        const same = (element) => element === suits[0];
        if (!suits.every(same)) {
            numbers.sort(function(a, b) {
                return a - b;
            });

            if (!(numbers.join('') === range.join(''))) {
                for (let element of numbers) {
                    count[element] = (count[element] || 0) + 1;
                }
                if (Object.keys(count).length === 5) {
                    return [true, Math.max(...numbers), 0];
                }
            }
        }
        return [false, 0, 0];
    }

    onliNumbers (hand) {
        const numbers = [];
        const str = {'T':10, 'J':11, 'Q':12, 'K':13, 'A':14};
        for (const card of hand) {
            if (card[0] in str) {
                numbers.push(str[card[0]]);
                continue;
            }
            numbers.push(parseInt(card[0]));
        }
        return numbers;
    }

    #onliSuit (hand) {
        const suits = [];
        for (const card of hand) {
            suits.push(card[1]);
        }
        return suits;
    }

    #range(n, start) {
        let range = [];

        for (let i = 0; i < n; i++) {
            range.push(start + i);
        }
        return range;
    }
}