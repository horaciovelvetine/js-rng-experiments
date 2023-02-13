import { SDC_MEAN_CHART_PROPS } from '../components/simple-dice-count/MeanChart';
import { DICE_DATA_POINT } from '../interfaces/dice-data-point';

type DICE_POINTS = DICE_DATA_POINT | DICE_DATA_POINT[];

export function generateMeanPlotData(dataSet: DICE_DATA_POINT[]): SDC_MEAN_CHART_PROPS {
	const minimum: DICE_POINTS = findMinimum(dataSet);
	const lowerQuartile: DICE_POINTS = { int: 0, occurs: 0, from: [] };
	const mean: DICE_POINTS = { int: 0, occurs: 0, from: [] };
	const upperQuartile: DICE_POINTS = { int: 0, occurs: 0, from: [] };
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
