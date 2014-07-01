describe('countNeighboursSpec', function() {

	var world, x, y;

	describe('Given empty 3 x 3 world', function () {

		world = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		describe('And given checking cell 1,1', function () {
			x = 1, y = 1;

			it('Should have no neighbours', function () {
				expect(countNeighbours(world, x, y)).toEqual(0);
			});
		});
	});



});