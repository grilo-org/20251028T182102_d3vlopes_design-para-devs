import { render, screen } from '@testing-library/react';

import { socialIconsMock as mock } from './SocialIcons.mock';

import { getTestElements } from './helpers/test/getTestElements';

import { SocialIcons } from '.';

const { getAllByRole, getAllByTestId } = screen;

jest.mock('@/presentation/components/atoms/Image', () => ({
	Image: () => {
		return <div data-testid="mock-image" />;
	},
}));

describe('<SocialIcons />', () => {
	beforeEach(() => render(<SocialIcons {...mock} />));

	it('should render correct Image length', () => {
		const imagens = getAllByTestId('mock-image');

		expect(imagens).toHaveLength(mock.icons.length);
	});

	it('should render anchor element under each icons', () => {
		const anchors = getAllByRole('link');

		expect(anchors).toHaveLength(mock.icons.length);
	});

	it('should render anchor with correct href value', () => {
		const elements = getTestElements(mock);

		expect(elements?.anchor).toHaveAttribute('href', elements?.icon.href);
	});

	it('should open href in a new tab', () => {
		const elements = getTestElements(mock);

		expect(elements?.anchor).toHaveAttribute('target', '_blank');
	});
});
