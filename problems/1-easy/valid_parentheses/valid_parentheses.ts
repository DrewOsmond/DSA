function isValid(s: string): boolean {
  //keep a stack of all characters in the string. If you find a corresponding match to the last char in the stack, then  pop it off the stack.
  const stack: string[] = [];
  //keep a list of all matches so we can easily check pairs by keying into matches and seeing if the values === the corresponding value to the key.
  const matches: { [key: string]: string } = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  //loop through the string
  for (let char of s) {
    const lastCharInStack = stack[stack.length - 1];
    //if the last char in the stack equals the corresponding closing bracket, then pop it off the stack
    if (matches[lastCharInStack] === char) {
      stack.pop();
    } else {
      //otherwise push the char into the stack
      stack.push(char);
    }
  }
  //if the stack is empty, return true as we've found all pairs. If the stack is not empty, then it is not valid.
  return stack.length === 0;
}

//a stack is a perfect data structure here because we we should never find a closing bracket before an opening one.
//if we do, we would add it to the stack and never pop it off (meaning the length of the stack won't be empty, so it's not valid)
//

console.log(isValid("({[]})"));
console.log(isValid("(){}}{"));
console.log(isValid("(]"));
