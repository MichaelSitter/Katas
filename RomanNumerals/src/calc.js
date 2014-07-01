function Calculator(){

	var getValue = function (char) {
		if (char == 'X') {
			return 10;
		}
		if (char == 'V') {
			return 5;
		}
		return 1;
	};

	var values = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100
	}

	this.convert = function (input) {

		var total = 0,
			curr,
			next;

		for (var i = 0; i < input.length; i++) {

			curr = values[input[i]];
			next = values[input[i + 1]];

			if (next > curr) {
				curr = curr * -1;
			}

			total += curr;
		};

		return total;
	}
};