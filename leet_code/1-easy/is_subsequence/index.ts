function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (t < s.length && j < s.length) {
    if (s[j] === t[i]) {
      j++
    }
    i++
  }

  return j === s.length;
}
