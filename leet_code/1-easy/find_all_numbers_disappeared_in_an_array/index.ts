function findDisappearedNumbers(nums: number[]): number[] {
  const posValues = new Map<number, boolean>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const pos = i + 1;
    if (posValues.get(pos) === undefined) {
      posValues.set(pos, false);
    }
    posValues.set(num, true);
  }

  const missing: number[] = [];

  posValues.forEach((seen, val) => {
    if (!seen) {
      missing.push(val);
    }
  });

  return missing;
}
