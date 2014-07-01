function countNeighbours(world, x, y) {
	var total = 0;
	for (var i = -1; i <= 1; i++) {
		for (var j = -1; j <= 1; j++) {
			total += world[y + i][x + j];
		};
	};
	return total;
};