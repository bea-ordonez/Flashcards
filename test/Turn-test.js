const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
    let correctTurn;
    let newCard;
    let incorrectTurn;

    beforeEach( function () {
        newCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        correctTurn = new Turn("object", newCard);
        incorrectTurn = new Turn ("array", newCard);
    })

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should have a guess and a card', () => {
        expect(correctTurn).to.be.an.instanceof(Turn);
        expect(correctTurn.guess).to.equal("object");
    })

    it('should return a guess', () => {
        expect(correctTurn.returnGuess()).to.equal("object");
    })

    it('should return a card', () => {
        expect(correctTurn.returnCard()).to.deep.equal(newCard);
    })

    it('should evaluate guess', () => {
        expect(correctTurn.evaluateGuess()).to.equal(true);
        expect(incorrectTurn.evaluateGuess()).to.equal(false);
        expect(correctTurn.correct).to.equal(true);
        expect(incorrectTurn.correct).to.equal(false);
    })

    it('evaluate whether the guess is correct or incorrect', () => {
        incorrectTurn.evaluateGuess();
        correctTurn.evaluateGuess();
        expect(correctTurn.giveFeedback()).to.equal('correct!')
        expect(incorrectTurn.giveFeedback()).to.equal('incorrect!')
    })
})