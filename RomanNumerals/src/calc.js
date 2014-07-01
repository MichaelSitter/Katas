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

	this.convert = function (input) {

		var total = 0,
			curr,
			next;

		for (var i = 0; i < input.length; i++) {

			curr = getValue(input[i]);
			next = getValue(input[i + 1]);

			if (next > curr) {
				curr = curr * -1;
			}

			total += curr;
		};

		return total;
	}
};