interface MappedNums {
  [key: number]: number;
}

function intersect(nums1: number[], nums2: number[]): number[] {
  const nums2Values: MappedNums = addNumsToMap(nums2);
  const intersectedArray: number[] = [];

  for (let num of nums1) {
    const val: number | undefined = nums2Values[num];
    if (val) {
      intersectedArray.push(num);
      nums2Values[num]--;
    }
  }

  return intersectedArray;
}

function addNumsToMap(nums: number[]): MappedNums {
  const mappedNums: MappedNums = {};
  for (let i = 0; i < nums.length; i++) {
    const num: number = nums[i];
    if (mappedNums[num]) {
      mappedNums[num]++;
    } else {
      mappedNums[num] = 1;
    }
  }

  return mappedNums;
}
