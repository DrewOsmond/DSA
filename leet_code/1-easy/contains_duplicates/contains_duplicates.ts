//complexity O(n)
function containsDuplicate(nums: number[]): boolean {
  //keep track of all the numbers we have currently seen.
  const seen: { [key: number]: boolean } = {};
  //loop through the given numbers
  for (let num of nums) {
    //if the number exists as a key in the object, we know we have a dupluicate, so return true;
    if (seen[num]) {
      return true;
      //otherwise continue the loop
    } else {
      seen[num] = true;
    }
  }
  //if we didn't find a duplicate, then we can return false
  return false;
}
