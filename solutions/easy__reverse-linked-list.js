/**
 * time: O(n)
 * space: O(n)
 * approach:
 * Use a temp to save next pointer and recursion to iterate over nodes.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const reverse = (node, prev) => {
    if (!node) return prev;
    const temp = node.next;
    node.next = prev;
    prev = node;
    return reverse(temp, prev);
  };
  return reverse(head, null);
};
