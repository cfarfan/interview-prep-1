/**
 * time: O(n*m)
 * space: O(n*m)
 * approach:
 * Per each cell, check if visited, if not, run BFS and mark all adjacent ones
 * as visited nodes, then increase number of islands by 1.
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let islands = 0;
  const visited = new Set();

  const pair = (i, j) => `${i},${j}`;
  const isInRange = (i, j) => i >= 0 && i < n && j >= 0 && j < m;

  const bfs = (i, j) => {
    const queue = [];
    queue.push([i, j]);
    visited.add(pair(i, j));
    while (queue.length > 0) {
      const [r, c] = queue.shift();
      for (dir of directions) {
        const rd = r + dir[0];
        const cd = c + dir[1];
        if (
          isInRange(rd, cd) &&
          grid[rd][cd] === "1" &&
          !visited.has(pair(rd, cd))
        ) {
          queue.push([rd, cd]);
          visited.add(pair(rd, cd));
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && !visited.has(pair(i, j))) {
        bfs(i, j);
        islands++;
      }
    }
  }

  return islands;
};
