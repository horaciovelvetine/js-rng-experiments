import { SDC_MEAN_CHART_PROPS } from '../components/simple-dice-count/MeanChart';
import { DICE_DATA_POINT } from '../interfaces/dice-data-point';

type DICE_POINTS = DICE_DATA_POINT | DICE_DATA_POINT[];

export function generateMeanPlotData(dataSet: DICE_DATA_POINT[]): SDC_MEAN_CHART_PROPS {
	const minimum: DICE_POINTS = findMinimum(dataSet);
	const lowerQuartile: DICE_POINTS = findQuartile(dataSet, false);
	const mean: DICE_POINTS = findMean(dataSet);
	const upperQuartile: DICE_POINTS = findQuartile(dataSet, true);
	const maximum: DICE_POINTS = findMaximum(dataSet);

	return { minimum, lowerQuartile, mean, upperQuartile, maximum };
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

const findMean = (data: DICE_DATA_POINT[]) => {
	let iterativeSum = 0;
	data.forEach(datPoint => {
		iterativeSum += datPoint.occurs;
	});
	const meanPoint = data.filter(datPoint => {
		return datPoint.occurs == Math.round(iterativeSum / data.length);
	});

	console.log(sortedByOccurs(data))

	return meanPoint.length !== 0 ? meanPoint : [sortedByOccurs(data)[Math.round(data.length / 2)]];
};

const sortedByOccurs = (data: DICE_DATA_POINT[]): DICE_DATA_POINT[] => {
	return structuredClone(data).sort((a: DICE_DATA_POINT, b: DICE_DATA_POINT) => a.occurs - b.occurs);
};
