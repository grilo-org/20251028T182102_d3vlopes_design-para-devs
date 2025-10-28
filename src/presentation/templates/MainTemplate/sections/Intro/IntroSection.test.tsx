import { render, screen } from '@testing-library/react';

import './helpers/test/mock';

import { introSectionMock as mock } from './IntroSection.mock';

import { IntroSection } from '.';

const { getByRole, getByTestId } = screen;

describe('<IntroSection />', () => {
	beforeEach(() => render(<IntroSection {...mock} />));

	it('should contain correct section id', () => {
		const { container } = render(<IntroSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', mock.id);
	});

	it('should render section heading', () => {
		const heading = getByRole('heading', { name: mock.heading });

		expect(heading).toBeInTheDocument();
	});

	it('should render StatsCards component', () => {
		const statsCards = getByTestId('mock-stats-cards');

		expect(statsCards).toBeInTheDocument();
	});
});
