/**
 * time: O(max(n,m))
 * space: O(max(n,m))
 * approach:
 * Simulate bit manipulation by keeping track of carries.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len = Math.max(a.length, b.length);
  const result = [];
  let carry = null;
  for (let i = 0; i < len; i++) {
    const numA = a[a.length - i - 1];
    const numB = b[b.length - i - 1];
    let num;
    if (numA && numB) {
      if (numA === "1" && numA === numB) {
        num = "0";
        if (carry === "1") {
          num = "1";
        }
        carry = "1";
      } else if (numA === "0" && numA === numB) {
        num = "0";
        if (carry === "1") {
          num = "1";
        }
        carry = null;
      } else {
        num = "1";
        if (carry === "1") {
          num = "0";
        }
      }
    } else {
      num = numA || numB;
      if (num === "0") {
        if (carry === "1") {
          num = "1";
        }
        carry = null;
      } else {
        if (carry === "1") {
          num = "0";
        }
      }
    }
    result.push(num);
  }
  if (carry === "1") {
    result.push(carry);
  }
  return result.reverse().join("");
};
