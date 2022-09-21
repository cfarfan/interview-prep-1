/**
 * time: O(n*m)
 * space; O(n*m)
 * approach:
 * Use bfs from each 0 to 1s, and update distance only if is lower.
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  if (mat.length === 0) return mat;

  const result = [];
  const queue = [];
  const rows = mat.length;
  const cols = mat[0].length;
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        row.push(0);
        continue;
      }
      row.push(Infinity);
    }
    result.push(row);
  }

  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length > 0) {
    const pos = queue.shift();
    for (let i = 0; i < 4; i++) {
      const neighbor = [pos[0] + direction[i][0], pos[1] + direction[i][1]];
      if (neighbor[0] < 0 || neighbor[1] < 0) continue; // out of bounds
      if (neighbor[0] >= rows || neighbor[1] >= cols) continue; // out of bounds

      if (result[neighbor[0]][neighbor[1]] > result[pos[0]][pos[1]] + 1) {
        result[neighbor[0]][neighbor[1]] = result[pos[0]][pos[1]] + 1;
        queue.push([neighbor[0], neighbor[1]]);
      }
    }
  }
  return result;
};
