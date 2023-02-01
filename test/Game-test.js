const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', () => {
    it.skip('should be a function', () => {
        const Game = new Game();
        expect(Game).to.be.a('function');
    })
})