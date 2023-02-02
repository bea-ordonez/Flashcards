const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
    let cardDeck;
    let card;

    beforeEach(function() {
        card = new Card( 2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array");
        cardDeck = new Deck([card, card, card]);
    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should have an array of cards', () => {
        expect(cardDeck.cards).to.deep.equal([card, card, card]);
    });

    it('should count the cards in the deck', () => {
        expect(cardDeck.countCards()).to.equal(3);
    });
});