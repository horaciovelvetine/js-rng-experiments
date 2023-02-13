import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { DICE_DATA_POINT } from '../../interfaces/dice-data-point';

interface SIMPLE_DICE_COUNT_BAR_CHART_PROPS {
	dataSet: DICE_DATA_POINT[];
}

export function SDCBarChart({ dataSet }: SIMPLE_DICE_COUNT_BAR_CHART_PROPS) {
	return (
		<BarChart data={dataSet} width={600} height={300}>
			<XAxis dataKey='int' />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey='occurs' fill='#f8f' />
		</BarChart>
	);
}
