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

import { ListNode } from "../../abstract_data_types";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) return null;
  const newHead = list1.val < list2.val ? list1 : list2;
  let currNode = newHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
  }

  list1 ? (currNode.next = list1) : null;
  list2 ? (currNode.next = list2) : null;

  return newHead;
}

console.log(mergeTwoLists);

const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;
const node3 = new ListNode(4);
node2.next = node3;

const node4 = new ListNode(1);
const node5 = new ListNode(3);
node4.next = node5;
const node6 = new ListNode(4);
node5.next = node6;

const example1 = node1;
const example2 = node4;

console.log(mergeTwoLists(example1, example2));
