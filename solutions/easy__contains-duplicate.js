/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Calculate frequencies and check if that value become greater or equal than 2.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    if (freq[nums[i]] >= 2) {
      return true;
    }
  }
  return false;
};
