const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', () => {
    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })
})