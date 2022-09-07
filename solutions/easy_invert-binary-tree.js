/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Visit each node using recursion, and flip pointers between left and right.
 * Stop recursion on leaf nodes.
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const invert = (node) => {
    if (!node) return;
    const temp = node.right;
    node.right = node.left;
    node.left = temp;
    invert(node.right);
    invert(node.left);
  };
  invert(root);
  return root;
};
