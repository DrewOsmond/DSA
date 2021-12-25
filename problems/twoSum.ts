function twoSum(nums: number[], target: number): number[] {
  const mappedNums: { [key: string]: [number, boolean][] } = {};
  const indexesToReturn: number[] = [];

  nums.forEach((num, i) => {
    if (mappedNums[num]) {
      mappedNums[num].push([i, false]);
    } else {
      mappedNums[num] = [[i, false]];
    }
  });

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (mappedNums[difference]) {
      for (let j = 0; j < mappedNums[difference].length; j++) {
        const touple = mappedNums[difference][j];
        if (!touple[1] && touple[0] !== i) {
          touple[1] = true;
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
