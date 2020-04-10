import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import './Players.css';

const Players = (props) => {
	const [darkMode, setDarkMode] = useDarkMode();
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<div className="dark-mode__toggle">
			<h1>Women's Football Players</h1>
			<button
				onClick={toggleMode}
				className={darkMode ? 'toggle toggled' : 'toggle'}>
				Dark Mode
			</button>
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
