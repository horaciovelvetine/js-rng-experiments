import { randomInt } from './math-module';

export type DATA_STORE = DATA_POINT[];
type DATA_POINT = {
	int: number;
	occurrs: number;
	from: number[];
};

export function rollDice(iterations: number, min: number, max: number) {
	const results = [];

	for (let i = 1; i <= iterations; i++) {
		const result = randomInt(min, max);
		const format = { roll: i, int: result };
		results.push(format);
	}

	return results;
}

export function generateSimpleDiceRollSet(iterations: number, min: number, max: number) {
	const results = rollDice(iterations, min, max);
	const store: DATA_STORE = [];

	results.forEach(result => {
		const occurrences = results.filter(roll => roll.int === result.int).length;
		const already_exists = () => store.find(data_point => data_point.int === result.int);

		if (already_exists() !== undefined) {
			already_exists()?.from.push(result.roll);
		} else {
			const data_point = { int: result.int, occurrs: occurrences, from: [result.roll] };
			store.push(data_point);
		}
	});

	return sortDataStore(store);
}

function sortDataStore(arr: DATA_STORE) {
	// sort a data store by an integer value
	return arr.sort((a, b) => a.int - b.int);
}
