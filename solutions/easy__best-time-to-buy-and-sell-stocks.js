/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Use two pointers, one for sell and one for buy, start those on positions at
 * the beginning. Calculate profit between them, if is negative, move each
 * pointers one position to the right. If profit es positive, check if the new max and move only
 * sell pointer to the right.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[sell] < prices[buy]) {
      buy = sell;
    } else {
      const profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    }
    sell++;
  }

  return maxProfit;
};
