var assert = require('assert');
var quantityMeasurement = require('./QuantityMeasurement');
var Unit = require('./Unit');

describe('Legth test cases', function () {
  it('should return equal when 1 feet and 1 feet.', function () {
    let length1 = new quantityMeasurement(Unit.FEET, 1);
    let length2 = new quantityMeasurement(Unit.FEET, 1);
    let ans = length1.compare(length2);
    assert.equal(ans, true);
  });
  it('should return equal when 1 inch and 1 inch.', function () {
    let length1 = new quantityMeasurement(Unit.INCH, 1);
    let length2 = new quantityMeasurement(Unit.INCH, 1);
    let ans = length1.compare(length2);
    assert.equal(ans, true);
  });
  it('should return equal when 1 yard and 1 yard.', function () {
    let length1 = new quantityMeasurement(Unit.YARD, 1);
    let length2 = new quantityMeasurement(Unit.YARD, 1);
    let ans = length1.compare(length2);
    assert.equal(ans, true);
  });
  it('should return equal when 1 cm and 1 cm.', function () {
    let length1 = new quantityMeasurement(Unit.CM, 1);
    let length2 = new quantityMeasurement(Unit.CM, 1);
    let ans = length1.compare(length2);
    assert.equal(ans, true);
  });
  it('should return not equal when 1 feet and 0 feet.', function () {
    let length1 = new quantityMeasurement(Unit.FEET, 1);
    let length2 = new quantityMeasurement(Unit.FEET, 0);
    let ans = length1.compare(length2);
    assert.equal(ans, false);
  });
  it('should return not equal when 1 inch and 0 inch.', function () {
    let length1 = new quantityMeasurement(Unit.INCH, 1);
    let length2 = new quantityMeasurement(Unit.INCH, 0);
    let ans = length1.compare(length2);
    assert.equal(ans, false);
  });
  it('should return not equal when 1 yard and 0 yard.', function () {
    let length1 = new quantityMeasurement(Unit.YARD, 1);
    let length2 = new quantityMeasurement(Unit.YARD, 0);
    let ans = length1.compare(length2);
    assert.equal(ans, false);
  });
  it('should return not equal when 1 cm and 0 cm.', function () {
    let length1 = new quantityMeasurement(Unit.CM, 1);
    let length2 = new quantityMeasurement(Unit.CM, 0);
    let ans = length1.compare(length2);
    assert.equal(ans, false);
  });
  it('should return equal when 1 feet and 12 inch.', function () {
    let length1 = new quantityMeasurement(Unit.FEET, 1);
    let length2 = new quantityMeasurement(Unit.INCH, 12);
    let ans = length1.compare(length2);
    assert.equal(ans, true);
  });
  it('should return equal when 1 yard and 36 inch.', function () {
    let length1 = new quantityMeasurement(Unit.YARD, 1);
    let length2 = new quantityMeasurement(Unit.INCH, 36);
    let ans = length1.compare(length2);
    assert.equal(ans, true);
  });
  it('should return equal when 1 cm and 0.4 inch.', function () {
    let length1 = new quantityMeasurement(Unit.CM, 1);
    let length2 = new quantityMeasurement(Unit.INCH, 0.4);
    let ans = length1.compare(length2);
    assert.equal(ans, true);
  });
});