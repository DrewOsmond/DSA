function sortArrayByParity(nums: number[]): number[] {
	let pointer: number = 0;

	for (let i: number = 0; i < nums.length; i++) {
		const num: number = nums[i];

		if (num % 2 === 0) {
			const numAtPointer: number = nums[pointer];
		}
	}

	return nums;
};
