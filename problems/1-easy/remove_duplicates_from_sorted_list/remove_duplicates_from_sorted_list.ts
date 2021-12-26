/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  //keep a pointer to the last unique node
  let currentNode: ListNode | null = head;

  while (currentNode && currentNode.next) {
    //if the value of the current node is the same as the next node, remove the next node and check the node after this one.
    if (currentNode.val === currentNode.next.val) {
      const newNext = currentNode.next.next;
      currentNode.next = newNext;
    } else {
      //if the value is not the same, we know that we've removed the duplicates. We can now move to the next unique node
      currentNode = currentNode.next;
    }
  }

  //return the head
  return head;
}
