/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use BFS and keep track of node level.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [{ node: root, level: 0 }];
  while (queue.length > 0) {
    const element = queue.shift();
    const { node, level } = element;
    if (!result[level]) {
      result.push([]);
    }
    result[level].push(node.val);
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }
  return result;
};
