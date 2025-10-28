import { render, screen } from '@testing-library/react';

import { heroMock as mock } from './Hero.mock';

import './utils/test/mock';

import { Hero } from '.';

const { getByRole, getAllByRole, getByTestId, getByText } = screen;

describe('<Hero />', () => {
	beforeEach(() => {
		render(<Hero {...mock} />);
	});

	it('should render heading', () => {
		const heading = getByTestId('mock-heading');

		expect(heading).toBeInTheDocument();
	});

	it('should render description', () => {
		const description = getByText(mock.description);

		expect(description).toBeInTheDocument();
	});

	it('should render image', () => {
		const image = getByTestId('mock-image');

		expect(image).toBeInTheDocument();
	});

	it('should render button primary and secondary', () => {
		const [primaryButton, secondaryButton] = getAllByRole('button');

		expect(primaryButton).toBeInTheDocument();
		expect(secondaryButton).toBeInTheDocument();
	});

	it('should render primary button under anchor', () => {
		const primaryAnchor = getByRole('link', {
			name: mock.buttons.primary.text,
		});

		expect(primaryAnchor).toBeInTheDocument();
	});

	it('should render secondary button under anchor', () => {
		const secondaryAnchor = getByRole('link', {
			name: mock.buttons.secondary.text,
		});

		expect(secondaryAnchor).toBeInTheDocument();
	});

	it('should render primary anchor with correct href value', () => {
		const primaryAnchor = getByRole('link', {
			name: mock.buttons.primary.text,
		});

		expect(primaryAnchor).toHaveAttribute('href', mock.buttons.primary.target);
		expect(primaryAnchor).toHaveAttribute('target', '_blank');
	});

	it('should render secondary anchor with correct href value', () => {
		const secondaryAnchor = getByRole('link', {
			name: mock.buttons.secondary.text,
		});

		expect(secondaryAnchor).toHaveAttribute(
			'href',
			mock.buttons.secondary.target,
		);
		expect(secondaryAnchor).not.toHaveAttribute('target', '_blank');
	});

	it('should match snapshot', () => {
		const { container } = render(<Hero {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
