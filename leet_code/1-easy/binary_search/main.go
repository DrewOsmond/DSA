package main

import (
	"fmt"
	"math"
)

func main() {
	// mySlice := []int{1, 2, 3, 4, 5, 6, 7, 8}
	mySecondSlice := []int{-1, 0, 3, 5, 9, 12}
	// search(mySlice, 5)
	fmt.Println(search(mySecondSlice, 2))
}

func search(nums []int, target int) int {
	low := 0
	high := len(nums) - 1

	for low <= high {
		midFloat := ((high - low) / 2.0) + low
		midIdx := int(math.Round(float64(midFloat)))

		val := nums[midIdx]

		if val == target {
			return midIdx
		} else if val < target {
			low = midIdx + 1
		} else if val > target {
			high = midIdx - 1
		}
	}

	return -1
}
