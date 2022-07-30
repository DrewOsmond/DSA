package isIsomorphic

func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	} 
	sMap := make(map[byte] byte)
  tMap := make(map[byte] byte)

  for i := 0; i < len(s); i++ {
    if sHasPair := sMap[s[i]]; sHasPair && sHasPair != t[i] {
      return false
    }

    if tHasPair := tMap[t[i]]; tHasPair && tHasPair != s[i] {
      return false
    }

    sMap[s[i]] = t[i]
    tMap[t[i]] = s[i]
  }
	
	return true 
}
