import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
	state = {
		title: ''
	};
	onInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	onFormSubmit = e => {
		e.preventDefault();
		if (this.state.title !== '') {
			this.props.addTodo(this.state.title);
			this.setState({ title: '' });
		}
	};
	render() {
		return (
			<form className='input-group mb-3' onSubmit={this.onFormSubmit}>
				<input type='text' className='form-control' placeholder='Todo' name='title' value={this.state.title} onChange={this.onInputChange} />
				<div className='input-group-append'>
					<button className='btn btn-outline-secondary' type='submit'>
						Submit
					</button>
				</div>
			</form>
		);
	}
}

// PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};
