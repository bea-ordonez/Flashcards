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
        this.turns += 1;
        this.cardPosition += 1;
        this.currentCard = this.deck[this.cardPosition];
        this.currentTurn.evaluateGuess();
        if(!this.currentTurn.correct) {
            this.incorrectGuesses.push(this.currentCard.id);
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