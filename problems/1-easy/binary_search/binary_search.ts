//complexity O(log n)

/* 
plan:
    check the middle index of the array, if the target is higher or lower
    then make a sub array cutting of the half that could contain the correct number
    keep doing this until you run out of indexes to check, or find the correct index.
*/
function search(nums: number[], target: number): number {
  let low: number = 0;
  let high: number = nums.length - 1;
  while (high >= low) {
    const middleIdx: number = Math.round((low + high) / 2);
    const middleNum: number = nums[middleIdx];
    if (target === middleNum) {
      return middleIdx;
    }
    if (target > middleNum) {
      low = middleIdx + 1;
    } else {
      high = middleIdx - 1;
    }
  }

  return -1;
}
