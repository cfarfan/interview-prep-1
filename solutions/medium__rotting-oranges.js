/**
 * time: O(n*m)
 * space: O(n*m)
 * approach:
 * Use BFS to find the shortest way from a rotten orange to a fresh one. Init
 * the queue with all rotten positions and count total of fresh oranges. Then
 * return the amount of levels discovered by BFS visits if there are non fresh
 * oranges left.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let time = 0;
  const queue = [];
  let fresh = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }
  if (fresh === 0) return 0;

  const inRange = (i, j) => i >= 0 && i < n && j >= 0 && j < m;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  while (queue.length > 0) {
    const elem = queue.shift();
    for (let dir of directions) {
      const r = dir[0] + elem[0];
      const c = dir[1] + elem[1];
      const level = elem[2];
      if (inRange(r, c) && grid[r][c] === 1) {
        fresh--;
        grid[r][c] = 2;
        queue.push([r, c, level + 1]);
        if (level + 1 > time) {
          time = level + 1;
        }
      }
    }
  }
  return fresh === 0 ? time : -1;
};
