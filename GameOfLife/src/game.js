function game(world){

	for (var x = 0; x < world.length; x++) {
		for (var y = 0; y < world[x].length; y++) {
			world[x][y] = 0;
		};
	};
	return world;
}