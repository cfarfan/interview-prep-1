/**
 * time: O(n)
 * space: O(1)
 * approach:
 * Use two pointers, one to jump one node at a time, and another one to
 * traverse twice faster by jumping two nodes at a time, when faster pointer
 * reaches the end, then return the one stepper pointer.
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
var middleNode = function (head) {
  let oneStepper = head;
  let twoStepper = head;
  while (twoStepper && twoStepper.next) {
    oneStepper = oneStepper.next;
    twoStepper = twoStepper.next.next;
  }
  return oneStepper;
};
