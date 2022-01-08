//big O = O(n)

import { ListNode } from "../../abstract_data_types";

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let forwardNode: ListNode | null = head;
  let backwardsNode: ListNode | null = head;

  while (forwardNode?.next && forwardNode.next.next) {
    forwardNode = forwardNode.next.next ? forwardNode.next.next : null;
    backwardsNode = backwardsNode!.next;

    if (forwardNode === backwardsNode) {
      return true;
    }
  }

  return false;
}

console.log(hasCycle);
