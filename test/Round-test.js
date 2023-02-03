const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
// const prototypeData = require('../src/data');

describe('Round', () => {
    let cardsArray;
    let newDeck;
    let newRound;
    
    beforeEach( function () {
        const card3 = new Card( 3,
         "What type of prototype method directly modifies the existing array?",
         ["mutator method", "accessor method", "iteration method"],
         "mutator method");
        const card4 = new Card( 4,
         "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
         ["mutator method", "accessor method", "iteration method"],
         "accessor method");
        const card5 = new Card( 5,
         "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
         ["mutator method", "accessor method", "iteration method"],
         "iteration method");
        cardsArray = [card3, card4, card5];
        newDeck = new Deck(cardsArray);
        newRound = new Round(newDeck);
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })

    it('should return the current card', () => {
        expect(newRound.returnCurrentCard()).to.equal(cardsArray[0]);
    })
    
    it('should take a turn when guess is made', () => {
        let guess = 1;

        newRound.takeTurn(guess);

        expect(newRound.turns).to.deep.equal(1);
        expect(newRound.currentTurn).to.be.an.instanceof(Turn);
    })

    it('turn should start with the first card in the deck and go to next card after each turn', () => {
        newRound.takeTurn();

        expect(newRound.turns).to.equal(1);
        expect(newRound.currentCard).to.deep.equal(cardsArray[1]);

        newRound.takeTurn();

        expect(newRound.turns).to.equal(2);
        expect(newRound.currentCard).to.deep.equal(cardsArray[2]);
    })

    it('should evaluate guess and store incorrect guesses', () => {
        const guess1 = 'mutator method'
        const guess2 = 'array'

        expect(newRound.takeTurn(guess1)).to.equal('correct!');
        expect(newRound.currentTurn.correct).to.equal(true);

        expect(newRound.takeTurn(guess2)).to.equal('incorrect!');
        expect(newRound.currentTurn.correct).to.equal(false);
    })

    it('should store id numbers of incorrect guesses', () => {
        const guess = 'accessor method';

        newRound.takeTurn(guess);
        newRound.takeTurn(guess);

        expect(newRound.incorrectGuesses).to.deep.equal([3])
    })

    it('should calculate percentage correct', () => {

        newRound.takeTurn('mutator method');
        newRound.takeTurn('iteration method');

        expect(newRound.calculatePercentCorrect()).to.equal(50)
    })


})