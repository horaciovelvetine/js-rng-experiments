import { DICE_DATA_POINT } from '../interfaces/dice-data-point';
import { randomInt } from './random-integer';

export function generateSimpleDiceRollSet(iterations: number, min: number, max: number) {
	const results = rollDice(iterations, min, max);
	const store: DICE_DATA_POINT[] = [];

	results.forEach(result => {
		const occurrences = results.filter(roll => roll.int === result.int).length;
		const already_exists = store.find(data_point => data_point.int === result.int);

		if (already_exists !== undefined) {
			already_exists?.from.push(result.roll);
		} else {
			const data_point = { int: result.int, occurs: occurrences, from: [result.roll] };
			store.push(data_point);
		}
	});

	return sortDataStore(store);
}

function rollDice(iterations: number, min: number, max: number) {
	const results = [];

	for (let i = 1; i <= iterations; i++) {
		const result = randomInt(min, max);
		const format = { roll: i, int: result };
		results.push(format);
	}

	return results;
}

function sortDataStore(arr: DICE_DATA_POINT[]) {
	// sort a data store by an integer value
	return arr.sort((a, b) => a.int - b.int);
}


