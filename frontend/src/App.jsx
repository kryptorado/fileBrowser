import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import List from './pages/FileBrowser/FileBrowser';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/" component={List} />
			</BrowserRouter>
		</div>
	);
}

export default App;
