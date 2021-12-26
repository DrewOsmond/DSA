function longestCommonPrefix(strs: string[]): string {
  //keep an array for all common chars in the prefix. Note: it's better time complexity to keep an array
  //pushing to an array is o(1) while adding to a string is o(n)
  const mostCommon: string[] = [];
  //loop through the length of the first string, it doesn't really matter which string you loop through the length
  //simply because even the shortest string would contain the longest common prefix
  for (let i = 0; i < strs[0].length; i++) {
    const char: string = strs[0][i];
    let isCommonPrefix: boolean = true;
    //check every single character at index I in the array
    strs.forEach((letter) =>
      //if the character at that index does not match, we can declore our commonPrefix as already found.
      letter[i] !== char ? (isCommonPrefix = false) : null
    );

    //if the prefix at that index are common, add it to the mostCommon array
    if (isCommonPrefix) {
      mostCommon.push(char);
    } else {
      //if the characters at that index are not even, break from the loop as the common prefix is found.
      break;
    }
  }

  return mostCommon.join("");
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
