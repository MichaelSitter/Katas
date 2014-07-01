describe('countNeighboursSpec', function() {

	var world, x, y;

	describe('Given empty 3 x 3 world', function () {

		beforeEach(function () {
			world = [
				[0,0,0],
				[0,0,0],
				[0,0,0]
			];
		});

		describe('And given checking cell 1,1', function () {
			beforeEach(function () { x = 1, y = 1; });

			it('Should have no neighbours', function () {
				expect(countNeighbours(world, x, y)).toEqual(0);
			});
		});
	});

	describe('Given 3 x 3 world with row of live cells', function () {

		beforeEach(function () {
			world = [
				[1,1,1],
				[0,0,0],
				[0,0,0]
			];
		});

		describe('And given checking cell 1,1', function () {
			beforeEach(function () { x = 1, y = 1; });

			it('Should have 3 neighbours', function () {
				expect(countNeighbours(world, x, y)).toEqual(3);
			});
		});
	});

	describe('Given 1 x 1 world', function () {

		beforeEach(function () {
			world = [[0]];
		});

		describe('And given checking cell in bounds', function () {
			beforeEach(function () { x = 0, y = 0; });

			// Cells outside the world are dead 
			it('Should have no neighbours', function () {
				expect(countNeighbours(world, x, y)).toEqual(0);
			});
		});
	});


});