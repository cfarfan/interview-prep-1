/**
 * time: O(n*3^l) where l is the length of the word
 * space: O(l) since this is recursive and the call stack will be the word length
 * approach:
 * Per each cell use backtracking to find the word.
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const n = board.length;
  const m = board[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const inRange = (i, j) => i >= 0 && i < n && j >= 0 && j < m;

  const backtrack = (i, j, charIdx) => {
    if (inRange(i, j) && word[charIdx] === board[i][j]) {
      board[i][j] = "#";
      if (charIdx === word.length - 1) return true;
      for (let dir of directions) {
        const r = i + dir[0];
        const c = j + dir[1];
        if (backtrack(r, c, charIdx + 1)) return true;
      }
      board[i][j] = word[charIdx];
    }
    return false;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
};
