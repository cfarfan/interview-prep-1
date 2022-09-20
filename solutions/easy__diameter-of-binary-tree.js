/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use DFS to traverse the binary tree and keep track of max diameter on each
 * recursion
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
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  const dfs = (node, count = 0) => {
    if (!node) return 0;
    const [leftPath, rightPath] = [dfs(node.left), dfs(node.right)];
    diameter = Math.max(diameter, leftPath + rightPath);
    return Math.max(leftPath, rightPath) + 1;
  };
  dfs(root);
  return diameter;
};
