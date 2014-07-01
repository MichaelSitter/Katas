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

		var total = 0;
		for (var i = 0; i < input.length; i++) {
			total += getValue(input[i]);
		};
		return total;
	}
};