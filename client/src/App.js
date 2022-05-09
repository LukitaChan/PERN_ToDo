import './App.css';
import React, { Fragment } from 'react';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {
	return (
		<Fragment>
			<div>
				<InputTodo />
				<ListTodo />
			</div>
		</Fragment>
	);
}

export default App;
