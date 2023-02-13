import { Bar, ComposedChart, Legend, Line, Scatter, XAxis, YAxis } from 'recharts';
import { DICE_DATA_POINT } from '../../interfaces/dice-data-point';

interface SDC_MEAN_CHART_PROPS {
	minimum: DICE_DATA_POINT;
	lowerQuartile: DICE_DATA_POINT;
	mean: DICE_DATA_POINT;
	upperQuartile: DICE_DATA_POINT;
	maximum: DICE_DATA_POINT;
}

export function SDCMeanChart({}: SDC_MEAN_CHART_PROPS) {
	return (
		<>
			<ComposedChart layout='vertical' width={600} height={400}>
				<XAxis dataKey='dataType' />
				<YAxis />
				<Legend />
				<Line />
				<Line />
				<Bar dataKey='1-10' />
				<Scatter />
			</ComposedChart>
		</>
	);
}

/* 
  { 
    lineOne: {
      lowerQuartileRange: minimum-lowerQuartile
    },
    lineTwo: {
      upperQuartileRange: upperQuartile-maximum
      
    },
    barData: {
      interQuartileRange: lowerQuartile-upperQuartile,
    },
    scatterData: {
      mean: n
    }
  }
*/
