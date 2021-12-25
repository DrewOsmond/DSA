function strStr(haystack: string, needle: string): number {
  if (haystack.length === 0 && needle.length === 0) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    let isNeedle: boolean = true;
    for (let j = 0; j < needle.length; j++) {
      const stringIdx: string = haystack[i + j];
      const needleIdx: string = needle[j];
      if (stringIdx !== needleIdx) {
        isNeedle = false;
      }
    }

    if (isNeedle) {
      return i;
    }
  }

  return -1;
}
