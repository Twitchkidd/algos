const times10 = n => n * 10;

const memoize = cb => {
	const cache = {};
	return n => {
		if (!cache[n]) {
			const result = cb(n);
			cache[n] = result;
			console.log('returning result');
			return result;
		}
		console.log('returning cached result');
		return cache[n];
	};
};

const memoizedTimes10 = memoize(times10);

console.log(memoizedTimes10(9));
console.log(memoizedTimes10(9));
