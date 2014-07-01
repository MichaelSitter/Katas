# The Game of Life

Write a function which takes one step in [Conway's 'Game of Life'](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The rules for the Game of Life are as follows:

1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overcrowding.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The input to your function should be an N-length array of length-M arrays of 1 or 0 values (1's representing coordiates with live cells). Your function should return the next generation of the game.

---
To get the karma runner started:

```
npm install
grunt karma
```