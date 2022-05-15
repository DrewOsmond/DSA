package mergeTwoLists

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

 type ListNode struct {
	 Val int
	 Next *ListNode
 }

 func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    var sortedNode *ListNode

	if list1 == nil {
        return list2
    } else if list2 == nil {
        return list1
    }

	if list1.Val < list2.Val {
		sortedNode = list1
		list1 = list1.Next
	} else {
		sortedNode = list2
		list2 = list2.Next
	}

	cur := sortedNode

	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			cur.Next = list1
			cur = cur.Next
			list1 = list1.Next
		} else {
			cur.Next = list2
			cur = cur.Next
			list2 = list2.Next
		}
	}

	if list1 != nil {
		cur.Next = list1
	} else {
		cur.Next = list2
	}


	return sortedNode
}