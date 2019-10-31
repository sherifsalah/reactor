import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _, { string } from 'lodash';

export default class Todo extends Component {
	getTodoStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};
	render() {
		const { id, title } = this.props.todo;
		return (
			<div className='card card-body px-2 py-1 mb-1'>
				<h5 className='d-flex justify-content-between align-items-center mb-0'>
					<div className='custom-control custom-checkbox'>
						<input type='checkbox' className='custom-control-input' id={'customCheck' + id} onChange={this.props.toggleCompleted.bind(this, id)} />
						<label className='custom-control-label' htmlFor={'customCheck' + id} style={this.getTodoStyle()}>
							{_.capitalize(title)}
						</label>
					</div>
					<button type='button' className='close' onClick={this.props.deleteTodo.bind(this, id)}>
						<span aria-hidden='true'>×</span>
					</button>
				</h5>
			</div>
		);
	}
}

// PropTypes
Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleCompleted: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};
