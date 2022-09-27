/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use inorder traversal to build a sorted array, then return the k-1 element.
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const sorted = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    sorted.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  return sorted[k - 1];
};
