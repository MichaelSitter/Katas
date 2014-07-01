describe('calcSpec', function () {

	var calc;
	describe('Given instance of Calculator', function () {
		calc = new Calculator();

		describe('Given I', function () {

			it('Should return 1', function () {
				expect(calc.convert('I')).toBe(1);
			});
		});

		describe('Given I', function () {
			it('Should return 1', function () {
				expect(calc.convert('I')).toBe(1);
			});
		});

		describe('Given V', function () {
			it('Should return 5', function () {
				expect(calc.convert('V')).toBe(5);
			});
		});

		describe('Given X', function () {
			it('Should return 10', function () {
				expect(calc.convert('X')).toBe(10);
			});
		});

		describe('Given II', function () {
			it('Should return 2', function () {
				expect(calc.convert('II')).toBe(2);
			});
		});

		describe('Given III', function () {
			it('Should return 3', function () {
				expect(calc.convert('III')).toBe(3);
			});
		});
	});
});