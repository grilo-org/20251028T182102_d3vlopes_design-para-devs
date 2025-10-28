import { screen } from '@testing-library/react';

import { SocialIconsProps } from '../..';

export function getTestElements(mock: SocialIconsProps) {
	for (const icon of mock.icons) {
		const anchor = screen.getByTitle(icon.name);

		return { anchor, icon };
	}
}
