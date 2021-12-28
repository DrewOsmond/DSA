interface MappedNums {
  [key: number]: number;
}

//time complexity: O(n)
function intersect(nums1: number[], nums2: number[]): number[] {
  //create a map of nums2 values O(n) time so we can directly
  //check nums2 vals in O(1) time.
  const nums2Values: MappedNums = addNumsToMap(nums2);
  const intersectedArray: number[] = [];

  for (let num of nums1) {
    const val: number | undefined = nums2Values[num];
    //if this number is a key in the map, and if the number is greater than 0;
    if (val) {
      //if there is a value, subtract one from the mapped numbers as well as push the number into the intersected array
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
