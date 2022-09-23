/**
 * time: O(amount*coins) -> O(s*c)
 * space: O(c)
 * approach:
 * Decrease the amount per each coin and try again with the new amount. After
 * each recursion call, save min values using memoization.
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = {};
  const getChange = function (coins, amount) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const remain = amount - coins[i];
      if (remain >= 0) {
        min = Math.min(min, 1 + getChange(coins, remain));
      }
    }
    memo[amount] = min;
    return min;
  };

  const result = getChange(coins, amount);
  return result === Infinity ? -1 : result;
};
