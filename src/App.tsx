import { generateSimpleDiceRollSet } from './func/simple-dice-rolls';
import { useState } from 'react';
import './App.css';
import { SimpleDiceCountBarChart } from './components/SimpleDiceCountBarChart';

function App() {
	const [data, setData] = useState(generateSimpleDiceRollSet(10000, 0, 100));

	return (
		<div className='App'>
			<main className='main-container'>
				<div>
					<SimpleDiceCountBarChart dataSet={data} />
				</div>
			</main>
		</div>
	);
}

export default App;
