/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Use Boyer-Moore Voting algorithm.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let majority = null;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      majority = nums[i];
    }
    count += nums[i] === majority ? 1 : -1;
  }

  return majority;
};
