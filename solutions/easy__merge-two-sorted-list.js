/**
 * time: O(n+m)
 * space: O(1)
 * approach:
 * Create a new pointer, assign the pointer to the node which has the greater value between
 * list1 and list2 nodes. Do this meanwhile both lists has remaining nodes.
 * In each iteration update the pointer to be the tail node.
 * Once list1 or list2 run out of nodes, assign remaining nodes to the tail of the pointer.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // edge case when one of the list is empty
  if (!list1 || !list2) return list1 || list2;

  let head = new ListNode();
  let tail = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  // append remaining nodes
  tail.next = list1 || list2;

  return head.next;
};
