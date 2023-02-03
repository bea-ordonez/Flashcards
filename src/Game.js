const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./round');
const Card = require('./card');
const Deck = require('./deck');

class Game {
  constructor() {
    this.currentRound;
  }

  createDeck() {
    const cards = prototypeQuestions.map(info => {
      const card = new Card(info.id, info.question, info.answers, info.correctAnswer);
      return card;
    })
    const deck = new Deck(cards);
    return deck;
  }

  createNewRound() {
    this.currentRound = new Round(this.createDeck());
    return this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const deck = this.createDeck();
    const round = this.createNewRound();
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;

   