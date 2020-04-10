import React from 'react';
import axios from 'axios';
import Players from './Players';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: [],
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/players')
			.then((response) => {
				console.log(response.data);
				this.setState({
					players: response.data, //array of objects
				});
			})
			.catch((error) => console.log('cant find the data', error));
	}

	render() {
		return (
			<div>
				<Players players={this.state.players} />
			</div>
		);
	}
}

export default App;
