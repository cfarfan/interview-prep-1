/**
 * time: O(n^2)
 * space: O(n)
 * approach:
 * Sort the array in ascending order, per each number in position i, use two
 * pointers (second and third) on position i+1 (second) and N-1 (third),
 * add the triplet to the results if the sum of nums[second] + num[third] is
 * equal to -nums[first] (target), otherwise, increase second pointer if is
 * lower than target or decrease third pointer if is greater.
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const asc = (a, b) => a - b;
  nums.sort(asc);
  const results = [];
  for (let first = 0; first < nums.length; first++) {
    // avoid duplicates
    if (first !== 0 && nums[first] === nums[first - 1]) continue;

    const target = -nums[first];
    let second = first + 1;
    let third = nums.length - 1;
    while (second < third) {
      const candidate = nums[second] + nums[third];
      if (candidate === target) {
        results.push([nums[first], nums[second++], nums[third--]]);
        // avoid duplicates
        while (second < third && nums[second] === nums[second - 1]) {
          second++;
        }
      } else if (candidate < target) {
        second++;
      } else {
        third--;
      }
    }
  }
  return results;
};
