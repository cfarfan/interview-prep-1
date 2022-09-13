/**
 * time: O(log(n))
 * space: O(1)
 * approach:
 * Since versions are in ascendant order, use Binary Search to find the first
 * bad version. The first bad version will be when middle pointer is a bad
 * version and middle - 1 is not.
 */
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2);
      const badMiddle = isBadVersion(middle);
      if (badMiddle) {
        if (!isBadVersion(middle - 1)) {
          return middle;
        } else {
          right = middle - 1;
        }
      } else {
        left = middle + 1;
      }
    }
    return 1;
  };
};
