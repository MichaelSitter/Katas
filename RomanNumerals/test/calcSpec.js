describe('calcSpec', function () {

	var calc;
	describe('Given instance of Calculator', function () {
		calc = new Calculator();

		describe('Given I', function () {
			
			it('Should return 1', function () {
				expect(calc.convert('I')).toBe(1);
			});
		});
	});
});