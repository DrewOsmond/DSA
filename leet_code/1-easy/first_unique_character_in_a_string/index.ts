//time complexity = O(n)

function firstUniqChar(s: string): number {
  const hashMap: { [key: string]: number } = {};

  for (const l of s) {
    if (hashMap[l]) {
      hashMap[l] = hashMap[l] + 1;
    } else {
      hashMap[l] = 1;
    }
  }

  console.log(hashMap);
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode"));
