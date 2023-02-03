const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/round');
const data = require('../src/data');
const util = require('../src/util');


describe('Game', () => {
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    })
})