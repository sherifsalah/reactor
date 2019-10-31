import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {
	render() {
		return (
			<div className="card card-body mb-3">
				<div className="media">
					<img src={this.props.user.avatar} className="rounded-circle mr-3" alt={this.props.user.first_name} style={{ width: '50px', height: '50px' }} />
					<div className="media-body">
						<h5 className="mt-0">{this.props.user.first_name + ' ' + this.props.user.last_name}</h5>
					</div>
				</div>
			</div>
		);
	}
}

// PropTypes
User.propTypes = {
	user: PropTypes.object.isRequired
};
