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

function detectCycle(head: ListNode | null): ListNode | null {
  const visited = new Set<ListNode>();

  let slowNode = head;
  let fastNode = head?.next ?? null;

  while (fastNode !== null && slowNode !== null) {
    if (visited.has(fastNode)) {
      return fastNode;
    }
    visited.add(slowNode!);
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }

  return null;
}
