const Turn = require("./Turn")

class Round{
    constructor(deck){
        this.turns = 0;
        this.deck = deck.cards;
        this.cardPosition = 0;
        this.currentCard = this.deck[this.cardPosition];
        this.incorrectGuesses = [];
        this.currentTurn = null;
    }

    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(guess) {
        this.currentTurn = new Turn(guess, this.currentCard);
        this.currentTurn.evaluateGuess();
        if(!this.currentTurn.correct) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns += 1;
        this.cardPosition += 1;
        this.currentCard = this.deck[this.cardPosition];
        if (this.cardPosition === this.deck.length) {
        return this.endRound()
        }
        return this.currentTurn.giveFeedback();
    }

    calculatePercentCorrect() {
        let correctGuesses = this.turns - this.incorrectGuesses.length;
        let percentCorrect = correctGuesses / this.turns * 100;
        return percentCorrect;
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
}



module.exports = Round;