/**
 * time: O(n)
 * space: O(n)
 * approach:
 * use a stack to keep track of opened brackets, and remove it only when a
 * matching close bracket appears
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const openBrackets = new Set(["{", "[", "("]);
  const closeBracketsMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (openBrackets.has(bracket)) {
      stack.push(bracket);
    } else {
      if (stack.pop() !== closeBracketsMap[bracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
