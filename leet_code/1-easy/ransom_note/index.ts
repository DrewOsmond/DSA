//big O = O(n)

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineCount: { [key: string]: number } = {};
 
  for (let char of magazine) {
    magazineCount[char]
      ? (magazineCount[char] = magazineCount[char] + 1)
      : (magazineCount[char] = 1);
  }

  for (let char of ransomNote) {
    if (magazineCount[char] && magazineCount[char] > 0) {
      magazineCount[char] = magazineCount[char] - 1;
    } else {
      return false;
    }
  }

  return true;
}
