import { screen } from '@testing-library/react';

import { ButtonFactory, ButtonRender } from './factory';

const { getByRole } = screen;

export const makeComponent = (variant?: ButtonRender) => {
	let component: HTMLElement;

	const isAnchor = variant === ButtonRender.AS_ANCHOR;

	ButtonFactory.make(variant ?? ButtonRender.DEFAULT);

	if (isAnchor) {
		component = getByRole('link', { name: 'Anchor' });
	} else {
		component = getByRole('button', { name: 'Button' });
	}

	return {
		component,
	};
};

export * from './factory';
