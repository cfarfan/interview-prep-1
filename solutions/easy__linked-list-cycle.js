/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Visit each node, return true if node.val === "visited", if not then
 * overwrite node.val = "visited". Return false if all node where visited.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head) {
    if (head.val === "visited") return true;
    head.val = "visited";
    head = head.next;
  }
  return false;
};
