//time complexity: 0(n)

/*
plan:
    We're going to loop backwards from the main array, and keep track of the 2 indexes
    first index will keep track of the last, and highest, element in the nums1 array.
    second index will keep track of the last, and highest element in the nums2 array.
    we can compare which array is higher, and make nums1 array at the given idx.
    decrease idx number and i or j, depending on whichw as higher. This will sort the array starting
    from the highest to the lowest.

*/
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  //idx set to the end of the array, as we are sorting from highest to lowest.
  let idx: number = nums1.length - 1;
  //an index to start the highest given element in nums1
  let i: number = m - 1;
  //an index to start the highest given element in nums2
  let j: number = n - 1;
  /*
    loop all the way through nums1 starting at the end,
    /and subtract idx on each iteration, as well as i or j
    depending on which element is higher.
  */
  while (idx >= 0) {
    //if i is less than 0, we've used all the elements in nums1. so keep adding numbers from num2
    if (i < 0) {
      nums1[idx--] = nums2[j--];
      //if j is less than 0, we've used all the elements in nums2. so keep adding numbers from num1
    } else if (j < 0) {
      nums1[idx--] = nums1[i--];
    } else {
      //check and see which element is higher, add the highest element to the nums1 array at idx
      if (nums1[i] > nums2[j]) {
        nums1[idx--] = nums1[i--];
      } else {
        nums1[idx--] = nums2[j--];
      }
    }
  }
  //no need to return any values since we just want to mutate the given nums1 array
}
