const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
    it('should return a string', () => {
        expect('CI with travis').to.equal('CI with travis');
    });
});