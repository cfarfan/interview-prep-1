/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Calculate char frequencies and sum all even frequencies, and sum odd
 * frequencies minus 1, if there are odd frequencies sum 1 at the result.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  let result = 0;
  let addOdd = false;
  const chars = Object.keys(freq);

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (freq[char] % 2 === 0) {
      result += freq[char];
    } else {
      result += freq[char] - 1;
      addOdd = true;
    }
  }
  if (addOdd) {
    result += 1;
  }
  return result;
};
