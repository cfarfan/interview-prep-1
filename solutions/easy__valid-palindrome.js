/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Transform all chars to lowercase, then replace all non-alphanumeric chars
 * using a regex pattern. Finally, traverse first half of the string and compare
 * each char with the backwards position in the second half. If are not equal,
 * return immediately false. After traverse the string, return true.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const word = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let lastIndex = word.length - 1;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[lastIndex - i]) {
      return false;
    }
  }
  return true;
};
