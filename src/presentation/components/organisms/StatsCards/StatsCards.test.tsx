import { render, screen } from '@testing-library/react';

import { statsCardsMock as mock } from './StatsCards.mock';

import { StatsCards } from '.';

const { getAllByTestId } = screen;

jest.mock('@/presentation/components/molecules/StatsCard', () => ({
	StatsCard: () => {
		return <div data-testid="mock-stats-card" />;
	},
}));

describe('<StatsCards />', () => {
	it('should render correct StatsCard length', () => {
		render(<StatsCards {...mock} />);

		const statsCard = getAllByTestId('mock-stats-card');

		expect(statsCard).toHaveLength(mock.items.length);
	});
});
