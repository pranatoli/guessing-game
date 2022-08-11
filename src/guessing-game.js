class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.guessNum = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.guessNum;
        this.guess();
    }

    greater() {
        this.min = this.guessNum;
        this.guess();
    }
}

module.exports = GuessingGame;
