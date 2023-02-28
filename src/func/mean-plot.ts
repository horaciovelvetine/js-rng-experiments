import { DICE_ROLL } from './simple-dice-rolls';

export function generateMeanPlotData(dataSet: DICE_ROLL[]) {
	const minimum = findMinimum(dataSet);
	const lowerQuartile = findQuartile(dataSet, false);
	const meanNearest = findMeanNearest(dataSet);
	const upperQuartile = findQuartile(dataSet, true);
	const maximum = findMaximum(dataSet);
	const meanActual = sumOfOccurs(dataSet) / dataSet.length;

	//! HERE!!!!!
	return {minimum, lowerQuartile, meanNearest, upperQuartile, maximum, meanActual};
}

const findMinimum = (data: DICE_ROLL[]) => {
	const localMin = data.reduce((prev, curr) => {
		return prev.occurs < curr.occurs ? prev : curr;
	});

	return data.filter(dp => dp.occurs == localMin.occurs);
};

const findMaximum = (data: DICE_ROLL[]) => {
	const localMax = data.reduce((prev, curr) => {
		return prev.occurs > curr.occurs ? prev : curr;
	});

	return data.filter(dp => dp.occurs == localMax.occurs);
};

const findQuartile = (data: DICE_ROLL[], loHi: boolean) => {
	// loHi == true/upper-quartile calc && false/lower-quartile calc

	const quartile = Math.round(data.length / 4);

	return loHi ? sortedByOccurs(data)[data.length - quartile] : sortedByOccurs(data)[quartile];
};

const findMeanNearest = (data: DICE_ROLL[]) => {
	// returns all matching dataPoints that share meanValue, or finds the 'middle' of the data set to return that point
	const meanPoint = data.filter(datPoint => {
		return datPoint.occurs == Math.round(sumOfOccurs(data) / data.length);
	});

	return meanPoint.length !== 0 ? meanPoint : [sortedByOccurs(data)[Math.round(data.length / 2)]];
};

const sortedByOccurs = (data: DICE_ROLL[]): DICE_ROLL[] => {
	//clones data and returns that copy sorted by the occurs attribute
	return structuredClone(data).sort((a: DICE_ROLL, b: DICE_ROLL) => a.occurs - b.occurs);
};

const sumOfOccurs = (data: DICE_ROLL[]) => {
	//find the total sum of the occurs column of each data point for mean calc...
	let iterativeSum = 0;
	data.forEach(dataPoint => {
		iterativeSum += dataPoint.occurs;
	});
	return iterativeSum;
};
