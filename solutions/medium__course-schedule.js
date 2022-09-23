/**
 * time: O(n+v)
 * space: O(n+v)
 * approach:
 * Use DFS to explore prerequisites and a visited hash for detecting loops
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // prepare adjacency list
  const adj = new Array(numCourses).fill(null);
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prerequisite] = prerequisites[i];
    if (adj[course] === null) {
      adj[course] = [];
    }
    adj[course].push(prerequisite);
  }

  const visited = new Set();
  const dfs = (course) => {
    if (!adj[course] || adj[course].length === 0) return true;
    if (visited.has(course)) return false;
    visited.add(course);
    while (adj[course].length > 0) {
      const last = adj[course].length - 1;
      if (dfs(adj[course][last])) {
        adj[course].pop();
      } else {
        return false;
      }
    }
    return true;
  };

  // check each course
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
