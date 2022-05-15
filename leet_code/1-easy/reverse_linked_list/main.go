package reverseList


 type ListNode struct {
	Val int
	Next *ListNode
 }


 func reverseList(head *ListNode) *ListNode {
    if head == nil {
		return head
	}

	var rev *ListNode = head
	cur := rev.Next
	rev.Next = nil

	for cur != nil {
		ph := cur
		cur = cur.Next
		ph.Next = rev
		rev = ph
	}

	return cur
}

// 3-4  2-1 