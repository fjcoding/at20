export class coins {
    constructor(player) {
        this.player = player;
        this.remaining = 9;
    }

    putcoin() {
        if (this.remaining > 0) {
            this.remaining--;
            return true;
        }
        return false;
    }
}
