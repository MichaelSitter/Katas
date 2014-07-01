function game(world){

	var result = [[]];
	var isCellAlive;
	var worldHeight = world.length;
	var worldWidth = world[0].length;

	for (var y = 0; y < worldHeight; y++) {
		for (var x = 0; x < worldWidth; x++) {
			
			isCellAlive = world[y][x];
			neighbourCount = countNeighbours(world, y, x);
			if (isCellAlive) {
				result[y].push(neighbourCount > 3 || neighbourCount < 2);
			} else {
				result[y].push(neighbourCount == 3);
			}
		}
	}

	return result;
};