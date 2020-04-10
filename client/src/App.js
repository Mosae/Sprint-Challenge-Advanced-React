import React from 'react';
import axios from 'axios';
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
				console.log(response);
			})
			.catch((error) => console.log('cant find the data', error));
	}

	render() {
		return <div>Players Names</div>;
	}
}

export default App;
