package fib

var seen map[int]int = make(map[int]int)

func fib(n int) int {
	if n == 0 {
		return 0
	}
	if n <= 2 {
		return 1
	}

	if _, ok := seen[n]; ok {
		return seen[n]
	}

	var fibNum int = fib(n-1) + fib(n-2)
	seen[n] = fibNum

	return fibNum
}
