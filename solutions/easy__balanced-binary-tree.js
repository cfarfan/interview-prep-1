/**
 * time: O(n*log(n))
 * space: O(n)
 * approach:
 * Use a recursive strategy to visit each node (n), and measure height every time
 * of the current subtree (log(n)).
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};

const getHeight = (node, height = 0) => {
  if (!node) return height;
  return Math.max(
    getHeight(node.right, height + 1),
    getHeight(node.left, height + 1)
  );
};
