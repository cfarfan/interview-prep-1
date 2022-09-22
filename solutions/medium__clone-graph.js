/**
 * time: O(n+v)
 * space: O(n)
 * approach:
 * Use a visited hash with a DFS to clone nodes.
 */
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;

  const visited = {};
  const clone = (node) => {
    if (visited[node.val]) return visited[node.val];

    const newNode = new Node(node.val, []);
    visited[node.val] = newNode;
    for (let i = 0; i < node.neighbors.length; i++) {
      newNode.neighbors.push(clone(node.neighbors[i]));
    }
    return newNode;
  };

  return clone(node);
};
