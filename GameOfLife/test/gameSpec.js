describe('gameSpec', function () {

	describe('Given a single cell', function () {

		var s = [[1]];
		it('Should die', function () {
			expect(game(s)).toEqual([[0]]);
		});
	});

	describe('Given two neighbouring cells', function () {

		var s = [[1,1]];
		it('Should return same input', function () {
			expect(game(s)).toEqual([[0,0]]);
		});
	});
});