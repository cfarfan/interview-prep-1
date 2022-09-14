/**
 * time: O(n)
 * space: O(n)
 * approach:
 * This problem can be tackled as the fibonacci problem, and can be solved
 * in O(n) time using memoization.
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};
  const climb = (num) => {
    if (num === 1) return 1;
    if (num === 2) return 2;
    if (memo[num]) return memo[num];
    memo[num] = climb(num - 1) + climb(num - 2);
    return memo[num];
  };
  return climb(n);
};
