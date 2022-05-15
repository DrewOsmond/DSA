package reverseString

func reverseString(s []byte)  {
    var start int
    var end int = len(s) - 1
    
    for start < end {
		temp := s[start]
		s[start] = s[end]
		s[end] = temp 
        
        start++
        end--
	}
}