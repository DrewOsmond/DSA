// the o(n) solution 
// we total up the whole array 
// loop through the array and add each value
// check before adding if its eaual to half of total minus the val we are on
// if it is equal then we know all vals to the left of i equals all values to the right

function pivotIndex(n: number[]): number {
  const total: number = n.reduce((prev, curr) => prev + curr), 0);
  let currVal: number = 0;

  for (let i = 0; i < n.length; index++) {
    const num = n[i];

    if (currVal * 2 === total - num) {
      return i;
    }    
  }
  return -1;
}

/*

 brute force method, on each index sum the left
 and the right side of the arrays until one matches  

function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const leftVals = sumSubArr(nums, 0, i);
    const rughtVals = sumSubArr(nums, i + 1, nums.length);

    if (leftVals === rughtVals) {
      return i;
    }
  }

  return -1;
}

function sumSubArr(nums: number[], start: number, end: number): number {
  let subArr: number = 0 
  for (let i = start; i <= end; i++) {
    const val: number = nums[i];
    subArr += val
  } 
  return subArr;
}
*/
