package sortedSquares

import "sort"

func sortedSquares(nums []int) []int {
    for i := 0; i < len(nums); i++ {
        var num int = nums[i]
        nums[i] = num * num
    }
	
	sort.Ints(nums)
	return nums
}