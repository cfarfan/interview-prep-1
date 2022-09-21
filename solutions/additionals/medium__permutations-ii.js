/**
 * time: O(n*n!)
 * space: O(n!)
 * approach:
 * Use backtracking with a frequency hash for creating candidates.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const permutations = [];
  const n = nums.length;

  const freq = {};
  for (let i = 0; i < n; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }

  const backtrack = (permutation = []) => {
    const arr = [...permutation];
    if (arr.length === n) {
      permutations.push(arr);
      return;
    }
    const numbers = Object.keys(freq);
    for (let i = 0; i < numbers.length; i++) {
      if (freq[numbers[i]] > 0) {
        freq[numbers[i]] -= 1;
        arr.push(numbers[i]);
        backtrack(arr);

        // restore frequency and permutation
        arr.pop();
        freq[numbers[i]] += 1;
      }
    }
  };
  backtrack();
  return permutations;
};
