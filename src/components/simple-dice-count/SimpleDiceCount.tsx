import { useState } from 'react';
import { generateSimpleDiceRollSet } from '../../func/simple-dice-rolls';
import { SDCBarChart } from './BarChart';
import { SDCInputs } from './Inputs';

export function SimpleDiceCount() {
	const [data, setData] = useState(generateSimpleDiceRollSet(1000, 1, 100));
	console.log(data);
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
