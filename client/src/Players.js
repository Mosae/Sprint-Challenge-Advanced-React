import React from 'react';
import useDarkMode from './hooks/useDarkMode';

const Players = (props) => {
	const [darkMode, setDarkMode] = useDarkMode();
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<div>
			<h1>Players</h1>
			<button>Dark Mode</button>
			<hr />
			<h3>
				Names:
				{props.players.map((el) => (
					<p>{el.name}</p>
				))}
			</h3>
		</div>
	);
};

export default Players;
