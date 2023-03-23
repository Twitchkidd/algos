const times10 = n => n * 10;

const cache = {};

const memoTimes10 = n => {
	if (!cache[n]) {
		const result = times10(n);
		cache[n] = result;
		console.log('returning result');
		return result;
	}
	console.log('returning cached result');
	return cache[n];
};

console.log(memoTimes10(9));
console.log(memoTimes10(9));
