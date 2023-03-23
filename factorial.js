// Memoization: caching the value that a function returns

const factorial = n => {
	if (n === 0 || n === 1) {
		return n;
	}
	const breadcrumbs = { 1: 1 };
	for (let i = 2; i <= n; i++) {
		breadcrumbs[i] = i * breadcrumbs[i - 1];
	}
	return breadcrumbs[n];
};

console.log(factorial(5));
