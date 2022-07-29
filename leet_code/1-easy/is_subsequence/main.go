package isSubsequence

func isSubsequence(s string, t string) bool {
    if len(s) == 0 {
    	return true
    }

	var count int

	for i := 0; i < len(t); i++ {
		if s[count] == t[i] {
			count++
		} 

        if count == len(s) {
        	return true
        }
	}

	return false
}