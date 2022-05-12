package removeElements

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeElements(head *ListNode, val int) *ListNode {
  for head != nil && head.Val == val {
    head = head.Next
  }

  if head == nil {
    return head
  } 

  var curr *ListNode = head.Next
  var prev *ListNode = head

  for curr != nil {
    if curr.Val == val {
      prev.Next = curr.Next
      curr = curr.Next
    } else {
      prev = prev.Next
      curr = curr.Next        
    }

  }

return head
}
