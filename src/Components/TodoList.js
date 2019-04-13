import React, { Component } from 'react';

window.id = 0;
export default class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					id: 1389253895,
					text: 'finish tech test',
					isComplete: true
				},
				{
					id: 1389253896,
					text: 'sleep',
					isComplete: false
				}
			]
		};
	}

	componentDidMount() {
		this.updateComplete();
	}

	handleAddTodo = (e) => {
		e.preventDefault();
		// todo from input value
		let todo = {
			id: window.id++,
			text: e.target.elements.todo.value,
			isComplete: false
		};

		// check if input is empty - alert user to input a todo
		if (todo.text === '') {
			alert('please enter a todo item');
		} else if (this.state.todos.indexOf(todo.text) > -1) {
			alert('this todo already exists');
		} else {
			// set state and add to todos array
			this.setState((prevState) => ({ todos: prevState.todos.concat([ todo ]) }));
			// clear input field
			e.target.elements.todo.value = '';
		}
	};

	handleClick = (index) => {
		let todosNew = [ ...this.state.todos ];
		todosNew[index].isComplete = !todosNew[index].isComplete;
		this.setState(
			() => ({
				todos: todosNew
			}),
			this.updateComplete()
		);
	};

	updateComplete = () => {
		let complete = [ ...this.state.todos ].filter((item) => {
			return item.isComplete === true;
		});
		this.setState(() => ({
			numberComplete: complete.length
		}));
	};

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<form className="add-todo" onSubmit={this.handleAddTodo}>
					<input className="add-todo__input" type="text" name="todo" placeholder="add item" />
					<button className="button">Add Todo</button>
				</form>
				<ul>
					{this.state.todos.map((todo, index) => {
						return (
							<li
								key={index}
								className={this.state.todos[index].isComplete ? 'complete' : 'none'}
								onClick={() => this.handleClick(index)}
							>
								{todo.text}
								{/* <button onClick={() => this.handleClick(index)}>X</button> */}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
