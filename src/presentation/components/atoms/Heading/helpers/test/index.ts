import { screen } from '@testing-library/react';

const { getByRole } = screen;

import { HeadingFactoryMock, HeadingRender } from './factory';

export const makeComponent = (renderType: HeadingRender) => {
	HeadingFactoryMock.make(renderType);

	const heading = getByRole('heading');

	return {
		heading,
	};
};

export * from './factory';
