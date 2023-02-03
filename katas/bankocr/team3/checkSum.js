import { asNumber } from './accnum';

export class checkSum{
    #lastNumber
    constructor(lastNumber) {
        this.#lastNumber=lastNumber;
    }
    sameNum(){
        return this.#lastNumber;
        }

    outSum () {
         const numNew = String(this.#lastNumber);
         const size = numNew.length;
         var suma = 0;
         for (let i = (size - 1); i >= 0; i-- ) {
                suma = suma + numNew[i];
         }
    }

}