/**
 * time: O(n*n!)
 * space: O(n!)
 * approach:
 * Use backtracking to generate permutations
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutations = [];
  const n = nums.length;
  const backtrack = (numbers, first = 0) => {
    const arr = [...numbers];
    if (first === n) permutations.push(arr);
    for (let i = first; i < n; i++) {
      [arr[first], arr[i]] = [arr[i], arr[first]];
      backtrack(arr, first + 1);
    }
  };
  backtrack(nums);
  return permutations;
};
