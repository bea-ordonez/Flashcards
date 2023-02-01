const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
    it('should be a function', () => {

        expect(Deck).to.be.a('function');
    })
})