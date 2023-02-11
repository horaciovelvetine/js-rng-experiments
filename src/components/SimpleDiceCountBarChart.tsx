import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { DATA_STORE } from '../func/simple-dice-rolls';

interface SIMPLE_DICE_COUNT_BAR_CHART_PROPS {
	dataSet: DATA_STORE;
}

export function SimpleDiceCountBarChart({ dataSet }: SIMPLE_DICE_COUNT_BAR_CHART_PROPS) {
	return (
		<BarChart data={dataSet} width={900} height={450}>
			<XAxis dataKey='int' />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey='occurrs' fill='#f8f' />
		</BarChart>
	);
}
