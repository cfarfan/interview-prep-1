/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use dfs using visit left, add node.val, and visit right order.
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = [];
  const dfs = (node) => {
    if (!node) return stack;
    dfs(node.left);
    stack.push(node.val);
    dfs(node.right);
    return stack;
  };
  return dfs(root);
};
