import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInDocument } from '@testing-library/jest-dom/extend-expect';
import Players from './Players';
import App from './App';

test('Names appear', () => {
	const { getByText } = render(
		<App>
			<Players />
		</App>
	);
	const nameText = getByText(/names:/i);
	expect(nameText).toBeDefined();
});
// test('Player header is appearing', () => {
// 	const { getByText } = render(<Players />);
// 	getByText(/alex/i);
// });
// test('Players  nameis appearing', () => {
// 	const { getByText } = render(<Players />);
// 	const alexText = getByText('Alex');
// 	expect(alexText).toBeInDocument();
// });
