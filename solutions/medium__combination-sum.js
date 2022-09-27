/**
 * time: O(n^((t/m)+1)) where (t)arget and (m)inimum value of the candidates
 * space: O(t/m) since that is the height of the tree
 * approach:
 * Use backtracking in an sorted array to test combinations, as soon as the sum
 * is greater than the target or the target was found, break the cycle because
 * remaining candidates will not be needed for the sum.
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const asc = (a, b) => a - b;
  candidates.sort(asc);
  const results = [];
  const backtrack = (comb, sum, start) => {
    for (let i = start; i < candidates.length; i++) {
      const combSum = sum + candidates[i];
      if (combSum < target) {
        backtrack([...comb, candidates[i]], combSum, i);
      } else if (combSum === target) {
        results.push([...comb, candidates[i]]);
        break;
      }
    }
  };
  backtrack([], 0, 0);
  return results;
};
