package main

import "fmt"

// func twoSum(nums []int, target int) []int {
// 	for i, x := range nums {
// 		for j := i + 1; j < len(nums); j++ {
// 			if x+nums[j] == target {
// 				return []int{i, j}
// 			}
// 		}
// 	}
// 	return nil
// }

func twoSum(nums []int, target int) []int {
	for i, x := range nums {
		for j := i + 1; j < len(nums); j++ {
			if x+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return nil
}

func main() {
	nums := []int{2, 7, 11}
	r := twoSum(nums, 6)
	if r != nil {
		fmt.Printf("%v", r)
	} else {
		fmt.Printf("错误！")
	}
}
