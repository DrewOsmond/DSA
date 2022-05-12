 
func containsDuplicate(nums []int) bool {
	seen := make(map[int]bool)
	for item := range nums {
		if seen[item] {	
      return false
		} else {
			seen[item] = true
		}
	}		
	return true
}


