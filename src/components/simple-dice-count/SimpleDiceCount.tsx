import { useState } from 'react';
import { generateSimpleDiceRollSet } from '../../func/simple-dice-rolls';
import { SDCBarChart } from './BarChart';
import { SDCInputs } from './Inputs';
import { generateMeanPlotData } from '../../func/mean-plot';

const DEFAULTS = {
	rolls: 100,
	minimum: 1,
	maximum: 10,
};

export function SimpleDiceCount() {
	const [data, setData] = useState(generateSimpleDiceRollSet(DEFAULTS.rolls, DEFAULTS.minimum, DEFAULTS.maximum));
	

	console.log(generateMeanPlotData(data));

	return (
		<>
			<div>
				<SDCInputs />
			</div>
			<div>
				<SDCBarChart dataSet={data} />
			</div>
		</>
	);
}

// a function which filters an array of objects and returns all of the objects with the smallest value for a specificied key value pair
