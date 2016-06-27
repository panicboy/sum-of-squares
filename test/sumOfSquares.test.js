var chai = require('chai');
chai.should();

var sumOfSquares = require('../sumOfSquares');

describe('sumOfSquares', function(){
  it('should be a function', function() {
    sumOfSquares.should.be.a.function;
  });
});