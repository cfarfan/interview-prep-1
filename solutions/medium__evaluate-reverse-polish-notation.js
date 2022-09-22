/**
 * time: O(n)
 * space: O(n);
 * Use recursion for pop() elements from the tokens stack.
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
const operators = new Set(["+", "-", "*", "/"]);
var evalRPN = function (tokens) {
  const token = tokens.pop();
  if (!operators.has(token)) return parseInt(token, 10);

  const right = evalRPN(tokens);
  const left = evalRPN(tokens);
  if (token === "*") return left * right;
  if (token === "/") return Math.trunc(left / right);
  if (token === "+") return left + right;
  if (token === "-") return left - right;
};
