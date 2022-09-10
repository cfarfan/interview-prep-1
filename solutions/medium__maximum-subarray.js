/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Use kadane's algorithm and only keep track of sums instead of start and
 * end of the subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
