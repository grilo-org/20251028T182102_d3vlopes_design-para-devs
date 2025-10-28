import { fireEvent, render, screen } from '@testing-library/react';

import { accordionMock as mock } from './Accordion.mock';

import { Accordion } from '.';

const { getByRole, getByTestId } = screen;

describe('<Accordion />', () => {
	beforeEach(() => render(<Accordion {...mock} />));

	it('should render heading', () => {
		const heading = getByRole('heading', { name: mock.title });

		expect(heading).toBeInTheDocument();
	});

	it('should render content', () => {
		const content = getByTestId('accordion-content');

		expect(content).toBeInTheDocument();
	});

	it('should render open/close button', () => {
		const button = getByRole('button');

		expect(button);
	});

	it('should render icon', () => {
		const icon = getByTestId('accordion-icon');

		expect(icon).toBeInTheDocument();
	});

	it('should render close by default', () => {
		const content = getByTestId('accordion-content');

		expect(content).toHaveAttribute('data-state', 'closed');
	});

	it('should change close/open state on click button', async () => {
		const button = getByRole('button');
		const content = getByTestId('accordion-content');

		fireEvent.click(button);

		expect(content).toHaveAttribute('data-state', 'open');

		fireEvent.click(button);

		expect(content).toHaveAttribute('data-state', 'closed');
	});

	it('should match snapshot', () => {
		const { container } = render(<Accordion {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
