package lengthOfLastWord

func lengthOfLastWord(s string) int {
    var char int

    for i := len(s) -1; i >= 0; i-- {
        if s[i] != ' ' {
            char ++
        } else if char > 0 {
            return char
        }
    }

    return char
}
