/**
 * time: O(log n)
 * space: O(1)
 * approach:
 * Implement binary search algorithm
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (target === nums[middle]) {
      return middle;
    }
    if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
