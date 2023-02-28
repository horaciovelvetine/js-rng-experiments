
import { randomInt } from './random-integer';

export function generateSimpleDiceRollSet(iterations: number, min: number, max: number) {
	const results = rollDice(iterations, min, max);
	const store: DICE_ROLL[] = [];

	results.forEach(result => {
		const occurrences = results.filter(roll => roll.int === result.int).length;
		const already_exists = store.find(data_point => data_point.integer === result.int);

		if (already_exists !== undefined) {
			return;
		} else {
			const data_point = { integer: result.int, occurs: occurrences };
			store.push(data_point);
		}
		return;
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

function sortDataStore(arr: DICE_ROLL[]) {
	// sort a data store by an integer value
	return arr.sort((a, b) => a.integer - b.integer);
}


export interface DICE_ROLL {
	integer: number;
	occurs: number;
}