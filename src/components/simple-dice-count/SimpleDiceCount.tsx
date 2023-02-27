import { useState } from 'react';
import { generateSimpleDiceRollSet } from '../../func/simple-dice-rolls';
import { SDCBarChart } from './BarChart';
import { SDCInputs } from './Inputs';
import { generateMeanPlotData } from '../../func/mean-plot';
import { SDCMeanChart } from './MeanChart';

const DEFAULTS = {
	rolls: 100,
	minimum: 1,
	maximum: 100,
};

export function SimpleDiceCount() {
	const [data, setData] = useState(generateSimpleDiceRollSet(DEFAULTS.rolls, DEFAULTS.minimum, DEFAULTS.maximum));
	const meanPlotData = () => generateMeanPlotData(data);

	return (
		<>
			<div>
				<SDCInputs />
			</div>
			<div>
				<SDCBarChart dataSet={data} />
			</div>
			<div>
				<SDCMeanChart {...meanPlotData()} />
			</div>
		</>
	);
}
