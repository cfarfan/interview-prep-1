/**
 * time: O(n*log(n))
 * space: O(1) // no extra space needed
 * approach:
 * Create a custom sort function using the euclidian distance.
 * in asc order.
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const getDistance = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  const asc = (a, b) => getDistance(a[0], a[1]) - getDistance(b[0], b[1]);
  points.sort(asc);
  return points.splice(0, k);
};
