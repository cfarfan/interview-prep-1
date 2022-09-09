/**
 * time: O(|n*m| + |4*n*m|) -> O(n*m)
 * space: O(n*m)
 * approach:
 * Use DFS for traverse the matrix and mark only cells unvisited and with
 * the original color
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const n = image.length;
  const m = image[0].length;
  const visited = {};
  const dfs = (i, j, originalColor, newColor) => {
    if (i < 0 || j < 0) return;
    if (i > n - 1 || j > m - 1) return;
    if (visited[`${i},${j}`]) return;
    if (image[i][j] !== originalColor) return;

    image[i][j] = newColor;
    visited[`${i},${j}`] = true;
    dfs(i + 1, j, originalColor, newColor);
    dfs(i - 1, j, originalColor, newColor);
    dfs(i, j + 1, originalColor, newColor);
    dfs(i, j - 1, originalColor, newColor);
  };

  dfs(sr, sc, image[sr][sc], color);
  return image;
};
