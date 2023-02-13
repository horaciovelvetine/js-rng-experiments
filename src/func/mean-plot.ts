import { SDC_MEAN_CHART_PROPS } from '../components/simple-dice-count/MeanChart';
import { DICE_DATA_POINT } from '../interfaces/dice-data-point';

export function generateMeanPlotData(dataSet: DICE_DATA_POINT[]): SDC_MEAN_CHART_PROPS {
	const minimum: DICE_DATA_POINT = { int: 0, occurs: 0, from: [] };
	const lowerQuartile: DICE_DATA_POINT = { int: 0, occurs: 0, from: [] };
	const mean: DICE_DATA_POINT = { int: 0, occurs: 0, from: [] };
	const upperQuartile: DICE_DATA_POINT = { int: 0, occurs: 0, from: [] };
	const maximum: DICE_DATA_POINT = { int: 0, occurs: 0, from: [] };

	return { minimum, lowerQuartile, mean, upperQuartile, maximum };
}
