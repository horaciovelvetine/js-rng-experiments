import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SimpleDiceCount } from './components';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<main className='main-container'>
			<SimpleDiceCount />
		</main>
	</React.StrictMode>
);
