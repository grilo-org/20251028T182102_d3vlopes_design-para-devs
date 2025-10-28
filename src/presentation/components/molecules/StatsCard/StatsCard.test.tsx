import { render, screen } from '@testing-library/react';

import { statsMock } from './StatsCard.mock';

import { StatsCard } from '.';

const { getByText } = screen;

const mock = statsMock[0];

describe('<StatsCard />', () => {
	beforeEach(() => {
		render(<StatsCard {...mock} />);
	});

	it('should render number', () => {
		const statsNumber = getByText(mock.number);

		expect(statsNumber).toBeInTheDocument();
	});

	it('should render text', () => {
		const statsText = getByText(mock.text);

		expect(statsText).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const { container } = render(<StatsCard {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
