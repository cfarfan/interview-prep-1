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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const dfs = (node, left, right) => {
    if (!node) return true;
    if (left < node.val && node.val < right) {
      const leftValid = dfs(node.left, left, node.val);
      const rightValid = dfs(node.right, node.val, right);
      return leftValid && rightValid;
    }
    return false;
  };
  return dfs(root, -Infinity, Infinity);
};
