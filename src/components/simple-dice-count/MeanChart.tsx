import { Bar, ComposedChart, Legend, Line, Scatter, XAxis, YAxis, ScatterChart } from 'recharts';
import { DICE_DATA_POINT } from '../../interfaces/dice-data-point';

//to allow for multiple concurrent integers which occur the same # of times
type DICE_POINTS = DICE_DATA_POINT | DICE_DATA_POINT[];

export interface SDC_MEAN_CHART_PROPS {
	lowerQuartile: DICE_POINTS;
	minimum: DICE_POINTS;
	meanActual: number; // 'expected mean'
	meanNearest: DICE_POINTS;
	maximum: DICE_POINTS;
	upperQuartile: DICE_POINTS;
}

export function SDCMeanChart({ lowerQuartile, minimum, meanActual, meanNearest, maximum, upperQuartile }: SDC_MEAN_CHART_PROPS) {
	const data = {};
	return <></>;
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
