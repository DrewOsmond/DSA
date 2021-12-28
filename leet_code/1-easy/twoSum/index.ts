function twoSum(nums: number[], target: number): number[] {
  //a map of all the keys which correspond with a unique number in nums.
  //the value of each number is an array of touples which stores the idx of each number
  //as well as a boolean on if that index has been added to the returned array or not.
  const mappedNums: { [key: string]: [number, boolean][] } = {};
  const indexesToReturn: number[] = [];
  //loop through the nums array to look at each number
  for (let i = 0; i < nums.length; i++) {
    const val: number = nums[i];
    const difference: number = target - nums[i];
    //check and see if we have this number already in the mapped nums,
    //if we do push the new number into the keys value to store the new location of this number.
    if (mappedNums[val]) {
      mappedNums[val].push([i, false]);
    } else {
      mappedNums[val] = [[i, false]];
    }
    //check to see if the difference is a number in our mapped array
    if (mappedNums[difference]) {
      //loop through the array of touples in our mapped array
      for (let j = 0; j < mappedNums[difference].length; j++) {
        const touple = mappedNums[difference][j];
        //looks to see if that number has a unique index that has not been used yet
        //and that the idx is not the current number in edge cases where that number plus itself === target
        if (!touple[1] && touple[0] !== i) {
          //mark idx as used and push the index
          touple[1] = true;
          indexesToReturn.push(touple[0]);
          indexesToReturn.push(i);
          break;
        }
      }
    }
  }
  return indexesToReturn;
}

// console.log(twoSum([2, 7, 11, 15], 9));
//   console.log(twoSum([3, 2, 4], 6));
