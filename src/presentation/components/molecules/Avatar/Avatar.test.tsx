import { render, screen } from '@testing-library/react';

import { avatarMock as mock } from './Avatar.mock';

import { Avatar } from '.';

const { getByTestId } = screen;

jest.mock('@/presentation/components/atoms/Image', () => ({
	Image: () => <div data-testid="mock-image" />,
}));

describe('<Avatar />', () => {
	it('should render wrapper with background class', () => {
		const { container } = render(<Avatar {...mock} />);

		const wrapper = container.firstChild;

		expect(wrapper).toHaveClass('bg-background-300');
	});

	it('should render Image component', () => {
		render(<Avatar {...mock} />);

		const image = getByTestId('mock-image');

		expect(image).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const { container } = render(<Avatar {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
