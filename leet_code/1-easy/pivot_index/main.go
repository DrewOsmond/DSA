package pivotIndex

func pivotIndex(nums []int) int {
	var total int
	for _, i := range nums {
		total += i
	}

	var curr int
	for i := 0; i < len(nums); i++ {
		if curr * 2 == total - nums[i] {
			return i
		}
		curr += nums[i]
	}

	return -1
}