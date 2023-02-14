package main

import "fmt"

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3.

func lengthOfLongestSubstring(s string) int {
	m := map[byte]int{}
	n := len(s)

	rk, ans := -1, 0
	for i := 0; i < n; i++ {
		if i != 0 {
			// 左指针向右移动一格，移除一个字符
			delete(m, s[i-1])
		}

		for rk+1 < n && m[s[rk+1]] == 0 {
			m[s[rk+1]]++
			rk++
		}

		ans = max(ans, rk-i+1)
	}

	return ans
}

func max(a, b int) int {
	if a < b {
		return b
	}
	return a
}

func main() {
	s := "abccbc"

	len := lengthOfLongestSubstring(s)
	fmt.Printf("%s不重复字符串长度为%d", s, len)
}
