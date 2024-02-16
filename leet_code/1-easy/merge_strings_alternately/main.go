package mergeAlternately


func mergeAlternately(word1 string, word2 string) string {
	var merged []byte
    var i int
    var j int

	if i < len(word1) {
		merged = append(merged, word1[i])
		i = i + 1
	}

	for i < len(word1) || j < len(word2) {
		if (i <= j && i < len(word1)) || j >= len(word2) {
			merged = append(merged, word1[i])
			i = i + 1
		} else if j < len(word2) {
			merged = append(merged, word2[j])
			j = j + 1
		}
	}

	return string(merged)
}