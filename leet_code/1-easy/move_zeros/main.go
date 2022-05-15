package moveZeroes

func moveZeroes(nums []int)  {
    var idx int

	for i := 0; i < len(nums); i++ {
		if num := nums[i]; num != 0 {
			nums[idx] = num
			idx++
		}
	}

	for idx < len(nums) {
		nums[idx] = 0
	}
}