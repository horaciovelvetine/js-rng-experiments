import { Bar, ComposedChart, Legend, Line, Scatter, XAxis, YAxis } from 'recharts';
import { DICE_DATA_POINT } from '../../interfaces/dice-data-point';

//to allow for multiple concurrent integers which occur the same # of times
type DICE_POINTS = DICE_DATA_POINT | DICE_DATA_POINT[];

export interface SDC_MEAN_CHART_PROPS {
	minimum: DICE_POINTS;
	lowerQuartile: DICE_POINTS;
	meanNearest: DICE_POINTS;
	upperQuartile: DICE_POINTS;
	maximum: DICE_POINTS;
	meanActual: number;
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
