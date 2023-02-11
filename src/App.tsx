import { rollDice, randomInt, countDiceRolls } from './func/math-module';
import React, { PureComponent, useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

function App() {
	const [data, setData] = useState(countDiceRolls(1000, 0, 100));
	
	return (
		<div className='App'>
			<main className='main-container'>
				<div>
					<BarChart data={data} width={900} height={450}>
						<XAxis dataKey='int' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='occurrs' fill='#f8f' />
					</BarChart>
				</div>
			</main>
		</div>
	);
}

export default App;
