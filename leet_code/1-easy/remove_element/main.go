package removeElement

func removeElement(nums []int, val int) int {
    var count int
    
    for i := 0; i < len(nums); i++ {
        if num := nums[i]; num != val {
            nums[count] = num
            count++
        }
    }
    
    return count
}