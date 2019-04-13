import React, { Component } from 'react';
import TodoList from './Components/TodoList';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
			</div>
		);
	}
}
