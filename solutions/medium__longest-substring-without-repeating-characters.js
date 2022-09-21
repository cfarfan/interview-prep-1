/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Use two pointers: start and end with a frequency hash, when a frequency
 * greater than one is found, move start pointer until that frequency decreased
 * to one.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;
  const freq = {};
  let start = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const char = s[i];
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] > 1) {
      while (freq[char] > 1) {
        freq[s[start]] -= 1;
        start++;
      }
    }
    max = Math.max(max, 1 + (i - start));
  }
  return max;
};
