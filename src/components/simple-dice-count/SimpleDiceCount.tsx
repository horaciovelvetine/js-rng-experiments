import { useState } from 'react';
import { generateSimpleDiceRollSet } from '../../func/simple-dice-rolls';
import { generateMeanPlotData } from '../../func/mean-plot';

const DEFAULTS = {
	rolls: 10000,
	minimum: 1,
	maximum: 100,
};

export function SimpleDiceCount() {
	const [data, setData] = useState(generateSimpleDiceRollSet(DEFAULTS.rolls, DEFAULTS.minimum, DEFAULTS.maximum));
	const meanPlotData = () => generateMeanPlotData(data);
	console.log(data)
	console.log(meanPlotData());
	return (
		<>
			This is a text
		</>
	);
}
