function Calculator(){
	this.convert = function (input) {
		if (input == 'X') {
			return 10;
		}
		if (input == 'V') {
			return 5;
		}
		return 1;
	}
};