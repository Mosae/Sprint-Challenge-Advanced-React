import React from 'react';

const Players = (props) => {
	return (
		<div>
			<h1>Players</h1>
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
