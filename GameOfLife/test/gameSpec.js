// describe('gameSpec', function () {

// 	describe('Given a single cell', function () {

// 		var s = [[1]];
// 		it('Should die', function () {
// 			expect(game(s)).toEqual([[0]]);
// 		});
// 	});

// 	describe('Given an empty cell', function () {

// 		var s = [[0]];
// 		it('Should stay dead', function () {
// 			expect(game(s)).toEqual([[0]]);
// 		});
// 	});

// 	describe('Given two neighbouring cells', function () {

// 		var s = [[1,1]];
// 		it('Should die out', function () {
// 			expect(game(s)).toEqual([[0,0]]);
// 		});
// 	});

// 	describe('Given 2 x 2 with 3 live cells', function () {

// 		var s = [[1,1],[1,0]];
// 		it('Should result in 1 live cell', function () {
// 			expect(game(s)).toEqual([[0,0],[0,1]]);
// 		});
// 	});
// });