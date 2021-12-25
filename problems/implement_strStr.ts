function strStr(haystack: string, needle: string): number {
  //if both values are empty, return 0 since the empty string is at the 0th index.
  if (haystack.length === 0 && needle.length === 0) {
    return 0;
  }
  //loop through the haystack
  for (let i = 0; i < haystack.length; i++) {
    let isNeedle: boolean = true;
    //loop through the length of the needle and see if the substring matches the needle
    for (let j = 0; j < needle.length; j++) {
      const stringIdx: string = haystack[i + j];
      const needleIdx: string = needle[j];
      //if there is a value of the substring that does not match, then it's not the index
      if (stringIdx !== needleIdx) {
        isNeedle = false;
      }
    }

    if (isNeedle) {
      //return early if we find the index of the substring (needle)
      return i;
    }
  }

  return -1;
}
