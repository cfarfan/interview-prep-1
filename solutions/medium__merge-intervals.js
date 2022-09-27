/**
 * time: O(n*log(n))
 * space: O(n)
 * approach:
 * Create two arrays, one for starts and other one for ends, sort them and
 * iterate over them and compare current start with previous end, if they don't
 * overlap, then insert the interval into the array.
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const n = intervals.length;
  if (n === 1) {
    return intervals;
  }
  const starts = [];
  const ends = [];
  intervals.forEach(([start, end]) => {
    starts.push(start);
    ends.push(end);
  });
  const asc = (a, b) => a - b;
  starts.sort(asc);
  ends.sort(asc);

  const results = [];
  let start = starts[0];
  for (let i = 1; i < n; i++) {
    const currStart = starts[i];
    const prevEnd = ends[i - 1];
    if (currStart > prevEnd) {
      results.push([start, prevEnd]);
      start = currStart;
    }
  }
  results.push([start, ends[ends.length - 1]]);
  return results;
};
