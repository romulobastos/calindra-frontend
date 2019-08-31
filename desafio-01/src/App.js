import React from 'react';
import './App.css';
import AutoSearch from './components/AutoSearch';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Calindra Tech</h1>
				<h2>Desafio 1</h2>
			</header>

			<section className="App-main">
				<AutoSearch />
			</section>
		</div>
	);
}

export default App;