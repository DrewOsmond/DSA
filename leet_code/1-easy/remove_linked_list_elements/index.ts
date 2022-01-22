import { ListNode } from "../../abstract_data_types";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;

  let currNode: ListNode | null = head;
  let nextNode: ListNode | null = head.next;
  while (currNode.next) {
    if (currNode.val === val) {
    }
  }
  //just here to stop TS errors
  return nextNode;
}

console.log(removeElements);
