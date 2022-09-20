/**
 * time: O(n);
 * space: O(n);
 * approach:
 * Split starts and ends in sorted arrays (or min heaps), traverse ends and add
 * an interval to the result array only if current end is less than next start.
 * If not move to next iteration until the condition satisfies.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const starts = intervals.map((interval) => interval[0]);
  const ends = intervals.map((interval) => interval[1]);
  starts.push(newInterval[0]);
  ends.push(newInterval[1]);

  const asc = (a, b) => a - b;
  starts.sort(asc);
  ends.sort(asc);

  const result = [];
  let start = null;
  for (let i = 0; i < starts.length; i++) {
    if (start == null) {
      start = starts[i];
    }
    const end = ends[i];
    const nextStart = starts[i + 1];
    if (end < nextStart || nextStart === undefined) {
      result.push([start, end]);
      start = null;
    }
  }
  return result;
};
