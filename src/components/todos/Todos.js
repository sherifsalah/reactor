import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import PropTypes from 'prop-types';

export default class Todos extends Component {
	render() {
		return (
			<>
				<div className='jumbotron h-100 mb-0'>
					<AddTodo addTodo={this.props.addTodo} />
					{this.props.loading ? (
						<div className='card card-body text-center px-2 py-1 mb-3'>
							<div className='d-flex justify-content-center'>
								<div className='spinner-border spinner-border-sm' role='status'>
									<span className='sr-only'>Loading...</span>
								</div>
							</div>
						</div>
					) : this.props.todos.length === 0 ? (
						<div className='card card-body text-center px-2 py-1 mb-3'>
							<h5 className='mb-0'>Empty</h5>
						</div>
					) : (
						this.props.todos.map((e, i) => {
							return <Todo key={e.id} todo={e} toggleCompleted={this.props.toggleCompleted} deleteTodo={this.props.deleteTodo} />;
						})
					)}
				</div>
			</>
		);
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleCompleted: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};
