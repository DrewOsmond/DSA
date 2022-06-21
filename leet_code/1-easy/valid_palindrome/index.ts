// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s: string): boolean {
  const chars = /[0-9a-z]/;

  const letters = s
    .toLowerCase()
    .split("")
    .filter((ele) => ele.match(chars));

  let i = 0;
  let j = letters.length - 1;

  while (i < letters.length) {
    const char1 = letters[i];
    const char2 = letters[j];

    if (char1 !== char2) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
