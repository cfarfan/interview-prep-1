/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use two passes, one from left to right, and right to left. Use a carry to
 * keep track of multiplication of previous numbers.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const arr = [1];
  let carry = 1;
  for (let i = 1; i < nums.length; i++) {
    carry = carry * nums[i - 1];
    arr.push(carry);
  }
  carry = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    carry = carry * nums[i + 1];
    arr[i] = arr[i] * carry;
  }
  return arr;
};
