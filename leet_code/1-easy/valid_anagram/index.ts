//big O = O(n)

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const charCount: { [key: string]: [number, number] } = {};

  for (let i = 0; i < s.length; i++) {
    const sChar: string = s[i];
    const tChar: string = t[i];

    if (charCount[sChar]) {
      charCount[sChar][0] = charCount[sChar][0] + 1;
    } else {
      charCount[sChar] = [1, 0];
    }

    if (charCount[tChar]) {
      charCount[tChar][1] = charCount[tChar][1] + 1;
    } else {
      charCount[tChar] = [0, 1];
    }
  }

  for (let count in charCount) {
    if (charCount[count][0] !== charCount[count][1]) {
      return false;
    }
  }

  return true;
}
