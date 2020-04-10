import React from 'react';

const Players = (props) => {
	return (
		<div>
			<h1>Players</h1>
			<h3>
				Names:
				{props.players.map((el) => {
					console.log(el);
				})}
			</h3>
		</div>
	);
};

export default Players;
