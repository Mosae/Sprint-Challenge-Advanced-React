import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: [],
		};
	}

	componentDidMount() {}

	render() {
		return <div>Players Names</div>;
	}
}

export default App;
