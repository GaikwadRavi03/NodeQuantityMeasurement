var unit = require("./Unit");

class Measurement {

	constructor(unit, value) {
		this.value = value;
		this.unit = unit;
	}

	compare(that) {
		if (this.unit == that.unit) {
			return this.value == that.value;
		} else if (this.unit != that.unit) {
			return this.unit * this.value == that.unit * that.value;
		} else {
			return false;
		}
	}
}
module.exports = Measurement;