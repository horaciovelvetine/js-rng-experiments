import { useState } from 'react';

interface SIMPLE_DICE_COUNT_INPUTS_PROPS {
	rollsToSimulate?: string;
	resultFloor?: string;
	resultCieling?: string;
}

export function SDCInputs({ rollsToSimulate = '100', resultFloor = '0', resultCieling = '100' }: SIMPLE_DICE_COUNT_INPUTS_PROPS) {
	const [simulateRollsInput, setRollsToSimulate] = useState(rollsToSimulate);
	const [floorInput, setResultFloor] = useState(resultFloor);
	const [cielingInput, setResultCieling] = useState(resultCieling);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, setStateCallback: React.Dispatch<React.SetStateAction<string>>) {
		setStateCallback(e.target.value);
	}

	function handleSimulateStart({ resultCieling, resultFloor, rollsToSimulate }: SIMPLE_DICE_COUNT_INPUTS_PROPS) {
		console.log(resultCieling, resultFloor, rollsToSimulate);
	}

	return (
		<div>
			<div>
				<label>Rolls to Simulate:</label>
				<input
					type='text'
					inputMode='numeric'
					pattern='[0-9]+'
					id='rolls-to-simulate'
					name='rolls-to-simulate'
					value={simulateRollsInput}
					onChange={e => {
						handleInputChange(e, setRollsToSimulate);
					}}></input>
			</div>
			<div>
				<label>Min:</label>
				<input
					type='number'
					id='result-floor'
					name='result-floor'
					value={floorInput}
					onChange={e => {
						handleInputChange(e, setResultFloor);
					}}></input>
			</div>
			<div>
				<label>Max:</label>
				<input
					type='number'
					id='result-cieling'
					name='result-cielieng'
					value={cielingInput}
					onChange={e => {
						handleInputChange(e, setResultCieling);
					}}></input>
			</div>
			<div>
				<button
					onClick={() => {
						handleSimulateStart({ resultCieling, resultFloor, rollsToSimulate });
					}}>
					Simulate
				</button>
			</div>
		</div>
	);
}
