var assert = require('assert');
var quantityMeasurement = require('./QuantityMeasurement');
var Unit = require('./Unit');

// describe('Length compare test cases', function () {
//   it('should return equal when 1 feet and 1 feet.', function () {
//     let length1 = new quantityMeasurement(Unit.length.FEET, 1);
//     let length2 = new quantityMeasurement(Unit.length.FEET, 1);
//     let ans = length1.compare(length2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when 1 inch and 1 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.INCH, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 1);
//     let ans = length1.compare(length2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when 1 yard and 1 yard.', function () {
//     let length1 = new quantityMeasurement(Unit.length.YARD, 1);
//     let length2 = new quantityMeasurement(Unit.length.YARD, 1);
//     let ans = length1.compare(length2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when 1 cm and 1 cm.', function () {
//     let length1 = new quantityMeasurement(Unit.length.CM, 1);
//     let length2 = new quantityMeasurement(Unit.length.CM, 1);
//     let ans = length1.compare(length2);
//     assert.equal(ans, true);
//   });
//   it('should return not equal when 1 feet and 0 feet.', function () {
//     let length1 = new quantityMeasurement(Unit.length.FEET, 1);
//     let length2 = new quantityMeasurement(Unit.length.FEET, 0);
//     let ans = length1.compare(length2);
//     assert.equal(ans, false);
//   });
//   it('should return not equal when 1 inch and 0 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.INCH, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 0);
//     let ans = length1.compare(length2);
//     assert.equal(ans, false);
//   });
//   it('should return not equal when 1 yard and 0 yard.', function () {
//     let length1 = new quantityMeasurement(Unit.length.YARD, 1);
//     let length2 = new quantityMeasurement(Unit.length.YARD, 0);
//     let ans = length1.compare(length2);
//     assert.equal(ans, false);
//   });
//   it('should return not equal when 1 cm and 0 cm.', function () {
//     let length1 = new quantityMeasurement(Unit.length.CM, 1);
//     let length2 = new quantityMeasurement(Unit.length.CM, 0);
//     let ans = length1.compare(length2);
//     assert.equal(ans, false);
//   });
//   it('should return equal when 1 feet and 12 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.FEET, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 12);
//     let ans = length1.compare(length2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when 1 yard and 36 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.YARD, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 36);
//     let ans = length1.compare(length2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when 1 cm and 0.4 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.CM, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 0.4);
//     let ans = length1.compare(length2);
//     assert.equal(ans, true);
//   });
// });

// describe('Length addition test cases', function () {
//   it('should return 2 when addition of 1 feet and 1 feet.', function () {
//     let length1 = new quantityMeasurement(Unit.length.FEET, 1);
//     let length2 = new quantityMeasurement(Unit.length.FEET, 1);
//     let ans = length1.addition(length2);
//     assert.equal(ans, 2);
//   });
//   it('should return equal 2 when addition of 1 inch and 1 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.INCH, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 1);
//     let ans = length1.addition(length2);
//     assert.equal(ans, 2);
//   });
//   it('should return equal 2 when addition of 1 yard and 1 yard.', function () {
//     let length1 = new quantityMeasurement(Unit.length.YARD, 1);
//     let length2 = new quantityMeasurement(Unit.length.YARD, 1);
//     let ans = length1.addition(length2);
//     assert.equal(ans, 2);
//   });
//   it('should return equal 2 when addition of 1 cm and 1 cm.', function () {
//     let length1 = new quantityMeasurement(Unit.length.CM, 1);
//     let length2 = new quantityMeasurement(Unit.length.CM, 1);
//     let ans = length1.addition(length2);
//     assert.equal(ans, 2);
//   });
//   it('should return equal 24 when addition of 1 feet and 12 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.FEET, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 12);
//     let ans = length1.addition(length2);
//     assert.equal(ans, 24);
//   });
//   it('should return equal 48 when addition of 1 feet and 1 yard.', function () {
//     let length1 = new quantityMeasurement(Unit.length.FEET, 1);
//     let length2 = new quantityMeasurement(Unit.length.YARD, 1);
//     let ans = length1.addition(length2);
//     assert.equal(ans, 48);
//   });
//   it('should return equal 48 when addition of 1 yard and 36 inch.', function () {
//     let length1 = new quantityMeasurement(Unit.length.YARD, 1);
//     let length2 = new quantityMeasurement(Unit.length.INCH, 36);
//     let ans = length1.addition(length2);
//     assert.equal(ans, 72);
//   });
// });

// describe('Volume convert test cases', function () {
//   it('should return equal when of 1 ml and 1 ml.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.ML, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.ML, 1);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, true);
//   });
//   it('should return not equal when of 1 ml and 0 ml.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.ML, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.ML, 0);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, false);
//   });
//   it('should return equal when of 1 lit and 1 lit.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.LIT, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.LIT, 1);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, true);
//   });
//   it('should return not equal when of 1 litr and 0 litr.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.LIT, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.LIT, 0);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, false);
//   });
//   it('should return equal when of 1 gallon and 1 gallon.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.GALLON, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.GALLON, 1);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, true);
//   });
//   it('should return not equal when of 1 gallon and 0 gallon.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.GALLON, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.GALLON, 0);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, false);
//   });
//   it('should return equal when of 1 litr and 1000 ml.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.LIT, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.ML, 1000);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when of 1 gallon and 0 ml.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.GALLON, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.ML, 3785.41);
//     let ans = volume1.compare(volume2);
//     assert.equal(ans, true);
//   });
// });

// describe('Voulme addition test cases', function () {
//   it('should return 2 when addition of 1 ml and 1 ml.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.ML, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.ML, 1);
//     let ans = volume1.addition(volume2);
//     assert.equal(ans, 2);
//   });
//   it('should return 2 when addition of 1 litr and 1 litr.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.LIT, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.LIT, 1);
//     let ans = volume1.addition(volume2);
//     assert.equal(ans, 2);
//   });
//   it('should return 2 when addition of 1 gallon and 1 gallon.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.GALLON, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.GALLON, 1);
//     let ans = volume1.addition(volume2);
//     assert.equal(ans, 2);
//   });
//   it('should return 10010 when addition of 10 ml and 10 litr.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.ML, 10);
//     let volume2 = new quantityMeasurement(Unit.volume.LIT, 10);
//     let ans = volume1.addition(volume2);
//     assert.equal(ans, 10010);
//   });
//   it('should return 37864 when addition of 10 ml and 10 gallon.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.GALLON, 10);
//     let volume2 = new quantityMeasurement(Unit.volume.ML, 10);
//     let ans = volume1.addition(volume2);
//     assert.equal(ans, 37864.1);
//   });
//   it('should return 13785 when addition of 1 gallon and 10 litr.', function () {
//     let volume1 = new quantityMeasurement(Unit.volume.GALLON, 1);
//     let volume2 = new quantityMeasurement(Unit.volume.LIT, 10);
//     let ans = volume1.addition(volume2);
//     assert.equal(ans, 13785.41);
//   });
// });

// describe('Weight convert test cases', function () {
//   it('should return equal when of 1 gm and 1 gm.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.GM, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.GM, 1);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when of 1 kg and 1 kg.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.KG, 1);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when of 1 tonne and 1 tonne.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, true);
//   });
//   it('should return not equal when of 1 gm and 0 gm.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.GM, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.GM, 0);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, false);
//   });
//   it('should return not equal when of 1 kg and 0 kg.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.KG, 0);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, false);
//   });
//   it('should return not equal when of 1 tonne and 0 tonne.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.TONNE, 0);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, false);
//   });
//   it('should return not equal when of 1 gm and 1 tonne.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.GM, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, false);
//   });
//   it('should return equal when of 1 kg and 1000 gm.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.GM, 1000);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, true);
//   });
//   it('should return equal when of 1000000 gm and 1 tonne.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.GM, 1000000);
//     let ans = weight1.compare(weight2);
//     assert.equal(ans, true);
//   });
// });

// describe('Weight addition test cases', function () {
//   it('should return equal 2 when addition of 1 gm and 1 gm.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.GM, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.GM, 1);
//     let ans = weight1.addition(weight2);
//     assert.equal(ans, 2);
//   });
//   it('should return equal 2 when addition of 1 kg and 1 kg.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.KG, 1);
//     let ans = weight1.addition(weight2);
//     assert.equal(ans, 2);
//   });
//   it('should return equal 2 when addition of 1 tonne and 1 tonne.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let ans = weight1.addition(weight2);
//     assert.equal(ans, 2);
//   });
//   it('should return equal 1001 when addition of 1 kg and 1000 gm.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.GM, 1);
//     let ans = weight1.addition(weight2);
//     assert.equal(ans, 1001);
//   });
//   it('should return equal 1010000 when addition of 1 tonne and 1000 gm.', function () {
//     let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
//     let weight2 = new quantityMeasurement(Unit.weight.GM, 10000);
//     let ans = weight1.addition(weight2);
//     assert.equal(ans, 1010000);
//   });
// });

describe('Temprature convert test cases', function () {
  it('should return equal when of 1 fara and 1 fara.', function () {
    let temprature1 = new quantityMeasurement(Unit.temprature.FAHRENHEIT, 1);
    let temprature2 = new quantityMeasurement(Unit.temprature.FAHRENHEIT, 1);
    let ans = temprature1.compareCelcius(temprature2);
    assert.equal(ans, true);
  });
  it('should return equal when of 1 fara and 0 fara.', function () {
    let temprature1 = new quantityMeasurement(Unit.temprature.FAHRENHEIT, 1);
    let temprature2 = new quantityMeasurement(Unit.temprature.FAHRENHEIT, 0);
    let ans = temprature1.compareCelcius(temprature2);
    assert.equal(ans, false);
  });
  it('should return equal when of 1 fara and -17.22 celcious.', function () {
    let temprature1 = new quantityMeasurement(Unit.temprature.FAHRENHEIT, 212);
    let temprature2 = new quantityMeasurement(Unit.temprature.CELSIUS, 100);
    let ans = temprature1.compareCelcius(temprature2);
    assert.equal(ans, true);
  });
  it('should return equal when of 50 fara and 10 celcious.', function () {
    let temprature1 = new quantityMeasurement(Unit.temprature.FAHRENHEIT, 50);
    let temprature2 = new quantityMeasurement(Unit.temprature.CELSIUS, 10);
    let ans = temprature1.compareCelcius(temprature2);
    assert.equal(ans, true);
  });
});