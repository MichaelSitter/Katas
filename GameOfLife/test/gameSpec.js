describe('gameSpec', function () {

	describe('Given a single live cell', function () {

		var s = [[1]];
		it('Should die', function () {
			expect(game(s)).toEqual([[0]]);
		});
	});


});