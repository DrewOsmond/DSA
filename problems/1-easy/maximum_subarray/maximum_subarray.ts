//look into kadanes algorithm

function maxSubArray(nums: number[]): number {
  //A a touple of the array itself, as well the whole array added up.
  let maxArray: [number[], number] = [nums, addUpArray(nums)];

  //loop through the array
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      const [_subArr, prevAdded] = maxArray;
      const subArray: number[] = nums.slice(i, j + 1);
      const subArrayAddedUp: number = addUpArray(subArray);

      if (subArrayAddedUp > prevAdded) {
        maxArray = [subArray, subArrayAddedUp];
      }
    }
  }
  return maxArray[1];
}

function addUpArray(nums: number[]): number {
  if (nums.length === 0) {
    return -Infinity;
  }
  return nums.reduce((prev, curr) => prev + curr);
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1]));
