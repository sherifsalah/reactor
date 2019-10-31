import React, { Component } from 'react';
import User from './User';
import PropTypes from 'prop-types';

export default class Users extends Component {
	render() {
		return (
			<div className="jumbotron h-100 mb-0">
				{this.props.loading ? (
					<div className="card card-body text-center mb-3">
						<div className="d-flex justify-content-center">
							<div className="spinner-border" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				) : this.props.users.length === 0 ? (
					<div className="card card-body text-center mb-3">
						<h5 className="mb-0">Empty</h5>
					</div>
				) : (
					this.props.users.map((e, i) => {
						return <User key={e.id} user={e} />;
					})
				)}
			</div>
		);
	}
}

// PropTypes
Users.propTypes = {
	users: PropTypes.array.isRequired
};
