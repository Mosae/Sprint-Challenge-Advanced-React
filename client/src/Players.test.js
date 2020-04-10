import React from 'react';
import { render } from '@testing-library/react';
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

test('header to  appear', () => {
	const { getByText } = render(
		<App>
			<Players />
		</App>
	);
	const headerText = getByText(/women's football players/i);
	expect(headerText).toBeDefined();
});
// test('Player header is appearing', () => {
// 	const { getByText } = render(
// 		<App>
// 			<Players />
// 		</App>
// 	);

// 	expect(
// 		queryByTestId(document.documentElement, 'html-element')
// 	).toBeInTheDocument();
// 	// const headerText = getByText(/Women's football players/i);
// 	// expect(headerText).toBeVisable();
// });
// test('Header is appearing', () => {
// 	const { getByText } = render(
// 		<App>
// 			<Players />
// 		</App>
// 	);
// 	const alexText = getByText(/Women's football players/i);
// 	// expect(alexText).toBeVisable();
// 	expect(getByText(alexText)).not.toBeVisible();
// });
