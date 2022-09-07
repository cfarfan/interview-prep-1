/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use a hash to map a num with its index, then per each element in nums look in
 * the hash if the complement exists.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const indexedNums = {};
  for (let i = 0; i < nums.length; i++) {
      indexedNums[nums[i]] = i;
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      const complement = target-nums[i];
      const complementIndex = indexedNums[complement]; 
      if( complementIndex !== undefined && complementIndex !== i) {
          result = [i, complementIndex];
          break;
      }
  }
  return result;
};