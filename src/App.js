import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
// import uuid from 'uuid';
import Header from './components/layouts/Header';
// import Users from './components/users/Users';
import Todos from './components/todos/Todos';
import About from './components/pages/About';

export default class App extends React.Component {
	state = {
		// users: [],
		todos: [],
		loading: true
	};
	componentDidMount() {
		// this.fetchUsers();
		this.fetchTodos();
	}
	toggleCompleted = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
	addTodo = async title => {
		// this.setState({
		// 	todos: [
		// 		...this.state.todos,
		// 		{
		// 			id: uuid.v4(),
		// 			title,
		// 			completed: false
		// 		}
		// 	]
		// });
		let result = await axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false
			})
			.then(response => {
				this.setState({
					todos: [...this.state.todos, response.data]
				});
			})
			.catch(error => {
				console.error(error);
			});
	};
	deleteTodo = async id => {
		// this.setState({
		// 	todos: [...this.state.todos.filter(todo => todo.id !== id)]
		// });
		let result = await axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(response => {
				this.setState({
					todos: [...this.state.todos.filter(todo => todo.id !== id)]
				});
			})
			.catch(error => {
				console.error(error);
			});
	};
	// fetchUsers = async () => {
	// 	let result = await axios.get('https://reqres.in/api/users?page=1');
	// 	let { data } = result.data;
	// 	this.setState({ users: data, loading: false });
	// };
	fetchTodos = async () => {
		// this.setState({ todos: [{ id: uuid.v4(), title: 'do something', completed: false }, { id: uuid.v4(), title: 'do something else', completed: false }, { id: uuid.v4(), title: 'do something else again', completed: false }, { id: uuid.v4(), title: 'do something completly different', completed: false }], loading: false });
		// this.setState({ todos: [] });
		let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20');
		this.setState({ todos: data, loading: false });
	};
	render() {
		// return <Users users={this.state.users} />;
		return (
			<Router>
				<Header />
				<Route
					exact
					path='/'
					render={props => (
						<>
							<Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} addTodo={this.addTodo} deleteTodo={this.deleteTodo} />
						</>
					)}
				/>
				<Route path='/about' component={About} />
			</Router>
		);
	}
}
