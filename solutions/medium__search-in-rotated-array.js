/**
 * time: O(log(n))
 * space: O(1);
 * approach:
 * Use binary search by looking for valid ranges, if target value is not in a
 * valid range, jump search to the other direction.
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
    const middle = left + Math.trunc((right - left) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[left] <= nums[middle]) {
      if (target >= nums[left] && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target <= nums[right] && target > nums[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};
