function countNeighbours(world, x, y) {
	var total = 0;
	var worldHeight = world.length;
	var worldWidth = world[0].length;
	for (var i = -1; i <= 1; i++) {

		if ((i + y) < 0 || (i + y) > worldHeight) {
			break;
		}

		for (var j = -1; j <= 1; j++) {

			if ((j + x) < 0 || (j + x) > worldWidth) {
				break;
			}		
			total += world[y + i][x + j];
		};
	};
	return total;
};