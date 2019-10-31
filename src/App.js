import React from 'react';
import axios from 'axios';
export default class App extends React.Component {
	state = {
		users: []
	};
	componentDidMount() {
		this.getUsers();
	}
	getUsers = async () => {
		let res = await axios.get('https://reqres.in/api/users?page=1');
		let { data } = res.data;
		this.setState({ users: data });
	};
	render() {
		return (
			<div>
				{this.state.users.length === 0 ? (
					<div>Loading...</div>
				) : (
					this.state.users.map((e, i) => {
						return <div key={i}>{e.first_name}</div>;
					})
				)}
			</div>
		);
	}
}
