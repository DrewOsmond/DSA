//kadane's algorithm approach, complexity is o(n)
function maxSubArray(nums: number[]): number {
  let sum: number = 0;
  //keep track of the max subarray, this value will be potentially updated multiple time.
  let max: number = -Infinity;
  //loop through the full array to find the subarray
  for (let i = 0; i < nums.length; i++) {
    const num: number = nums[i];
    //keep adding values into num
    sum += num;
    //if sum becomes less than the current max, we know the new added values
    //make the subarray smaller. So keep at at max. Otherwise if the value goes up,
    //we know the max subarray is still not found, so update max to the current highest subarray added up
    max = Math.max(sum, max);

    //if sum is less than zero, we can set sum to an empty subarray and search for a higher subarray
    if (sum < 0) {
      sum = 0;
    }
  }
  //return the highest subarray found
  return max;
}

//brute force approach, complexty is o(n * n)
function maxSubArrayBruteForce(nums: number[]): number {
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
