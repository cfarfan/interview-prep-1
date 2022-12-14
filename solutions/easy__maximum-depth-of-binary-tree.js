/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use DFS to traverse binary tree while keeping track of max height;
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
 * @return {number}
 */
var maxDepth = function (root) {
  const dfs = (node) => {
    if (!node) return 0;
    return Math.max(dfs(node.left), dfs(node.right)) + 1;
  };
  return dfs(root);
};
