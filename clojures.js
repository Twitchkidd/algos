const clojuredMemoTimesM = m => {
	const cache = {};
	return n => {
		if (!cache[n]) {
			const result = n * m;
			cache[n] = result;
			console.log('returning result');
			return result;
		}
		console.log('returning cached result');
		return cache[n];
	};
};

const times9 = clojuredMemoTimesM(9);
const times10 = clojuredMemoTimesM(10);

console.log(times9(9));
console.log(times9(9));

console.log(times10(9));
console.log(times10(9));
