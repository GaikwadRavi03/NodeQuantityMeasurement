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

	compareCelcius(that) {
		if (this.unit == that.unit) {
			return this.value == that.value;
		} else if (that.unit == 'fahrenheit') {
			return (this.value == (that.value - 32) * 5 / 9);
		} else if (that.unit == 'celsius') {
			return (this.value == (that.value * 9 / 5) + 32);
		} else {
			return false;
		}
	}

	addition(that) {
		if (this.unit == that.unit) {
			return this.value + that.value;
		} else if (this.unit != that.unit) {
			return this.unit * this.value + that.unit * that.value;
		} else {
			return 0;
		}
	}
}
module.exports = Measurement;