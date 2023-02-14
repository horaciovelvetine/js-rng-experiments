import { SDC_MEAN_CHART_PROPS } from '../components/simple-dice-count/MeanChart';
import { DICE_DATA_POINT } from '../interfaces/dice-data-point';

type DICE_POINTS = DICE_DATA_POINT | DICE_DATA_POINT[];

export function generateMeanPlotData(dataSet: DICE_DATA_POINT[]): SDC_MEAN_CHART_PROPS {
	const minimum: DICE_POINTS = findMinimum(dataSet);
	const lowerQuartile: DICE_POINTS = findQuartile(dataSet, false);
	const meanNearest: DICE_POINTS = findMeanNearest(dataSet);
	const upperQuartile: DICE_POINTS = findQuartile(dataSet, true);
	const maximum: DICE_POINTS = findMaximum(dataSet);
	const meanActual = sumOfOccurs(dataSet) / dataSet.length;

	return { minimum, lowerQuartile, meanNearest, upperQuartile, maximum, meanActual };
}

const findMinimum = (data: DICE_DATA_POINT[]) => {
	const localMin = data.reduce((prev, curr) => {
		return prev.occurs < curr.occurs ? prev : curr;
	});

	return data.filter(dp => dp.occurs == localMin.occurs);
};

const findMaximum = (data: DICE_DATA_POINT[]) => {
	const localMax = data.reduce((prev, curr) => {
		return prev.occurs > curr.occurs ? prev : curr;
	});

	return data.filter(dp => dp.occurs == localMax.occurs);
};

const findQuartile = (data: DICE_DATA_POINT[], loHi: boolean) => {
	// loHi == true/upper-quartile calc && false/lower-quartile calc

	const quartile = Math.round(data.length / 4);

	return loHi ? sortedByOccurs(data)[data.length - quartile] : sortedByOccurs(data)[quartile];
};

const findMeanNearest = (data: DICE_DATA_POINT[]) => {
	// returns all matching dataPoints that share meanValue, or finds the 'middle' of the data set to return that point
	//* I think this may be garbage info... may remove later
	const meanPoint = data.filter(datPoint => {
		return datPoint.occurs == Math.round(sumOfOccurs(data) / data.length);
	});

	return meanPoint.length !== 0 ? meanPoint : [sortedByOccurs(data)[Math.round(data.length / 2)]];
};

const sortedByOccurs = (data: DICE_DATA_POINT[]): DICE_DATA_POINT[] => {
	//clones data and returns that copy sorted by the occurs attribute
	return structuredClone(data).sort((a: DICE_DATA_POINT, b: DICE_DATA_POINT) => a.occurs - b.occurs);
};

const sumOfOccurs = (data: DICE_DATA_POINT[]) => {
	//find the total sum of the occurs column of each data point for mean calc...
	let iterativeSum = 0;
	data.forEach(dataPoint => {
		iterativeSum += dataPoint.occurs;
	});
	return iterativeSum;
};
