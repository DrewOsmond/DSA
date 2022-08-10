function backspaceCompare(s: string, t: string): boolean {
  const sStack: string[] = makeStack(s);
  const tStack: string[] = makeStack(t);

  return sStack.join("") === tStack.join("");
}

function makeStack(s: string): string[] {
  const charStack: string[] = [];

  for (let char of s) {
    if (char === "#") {
      charStack.pop();
    } else {
      charStack.push(char);
    }
  }

  return charStack;
}
