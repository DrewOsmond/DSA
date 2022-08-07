package middleNode

import "math"

type ListNode struct {
	Val  int
	Next *ListNode
}

func middleNode(head *ListNode) *ListNode {
	var nodes []*ListNode = make([]*ListNode, 0)

	curr := head
	for curr != nil {
		nodes = append(nodes, curr)
		curr = curr.Next
	}

	midIdx := int(math.Round(float64(len(nodes)) / 2.0))

	return nodes[midIdx]
}
